//app.js
var api = require("./api/api.js"); //引入apijs
App({
  onLaunch: function() {
    console.log("奇行启动")
    //调用API从本地缓存中获取数据
    var jwt = wx.getStorageSync('jwt');
    var that = this;
    //获取用户定位
    that.getlocal();
    if (!jwt) {
      that.login()
      //检查 jwt 是否存在 如果不存在调用登录
    } else {
      this.globalData.jwt = jwt
    }
  },
  getlocal() {
    var that = this;
    wx.authorize({
      scope: 'scope.userLocation',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            //获取成功进行位置比对
            // console.log(res)
          }
        })
      }
    })
  },
  login: function(e) {
    var userinfo = e
    // 登录部分代码
    var that = this;
    wx.login({
      // 调用 login 获取 code
      success: function(res) {
        var code = res.code;
        try {
          that.globalData.userInfo = userinfo.detail.userInfo;
          var encryptedData = userinfo.detail.encryptedData || 'encry';
          var iv = userinfo.detail.iv || 'iv';
        } catch (e) {
          return false
        }
        wx.request({ // 发送请求 获取 jwt
          url: api.Login,
          header: {
            Authorization: 'JWT' + that.globalData.access_token,
          },
          data: {
            username: encryptedData,
            password: iv,
            code: code,
          },
          method: "POST",
          success: function(res) {
            if (res.statusCode === 200) {
              // 得到 jwt 后存储到 storage，
              wx.showToast({
                title: '登录成功',
                icon: 'success'
              });
              wx.setStorage({
                key: "jwt",
                data: res.data.token
              });
              console.log(that.globalData)
              that.globalData.jwt = res.data.token
              that.globalData.access_token = res.data.token;
              that.globalData.account_id = res.data.sub
            } else if (res.statusCode === 400) {
              // 如果没有注册调用注册接口
              console.log('login失败，去注册')
              that.register(userinfo);
            } else {
              // 提示错误信息
              wx.showToast({
                title: res.data.text,
                icon: 'success',
                duration: 2000
              });
            }
          },
          fail: function(res) {}
        })
      }
    })
  },
  register: function(e) {
    // 注册代码
    console.log("register")
    var that = this;
    var userinfo = e
    console.log("e", e)
    wx.login({ // 调用登录接口获取 code
      success: function(res) {
        var code = res.code;
        console.log(res)
        try {
          that.globalData.userInfo = userinfo.detail.userInfo;
          var encryptedData = userinfo.detail.encryptedData || 'encry';
          var iv = userinfo.detail.iv || 'iv';
        } catch (e) {
          console.log("失败")
          return false
        }
        wx.request({ // 请求注册用户接口
          url: api.Registered,
          header: {
            // Authorization: config.basic_token
          },
          data: {
            username: encryptedData,
            password: iv,
            code: code,
          },
          method: "POST",
          success: function(res) {
            console.log(res)
            if (res.statusCode == 201) {
              that.login(userinfo);
            }
            if (res.statusCode == 401) {
              that.register(userinfo);
            }
          },
          fail: function(res) {
            console.log(res, "注册失败")
          }
        })
      }
    })

  },
  globalData: {
    userInfo: null,
    jwt: null,
    shopid: 4,
    logined: true,
    categorys: null,
    goods: null,
    cartnum: null,
    address: 0,
    toolcur: 1,
  },
  //多张图片上传
  uploadimg(data){
    var that = this,
    i=data.i ? data.i : 0,//当前上传的哪张图片
    success=data.success ? data.success : 0,//上传成功的个数
    fail=data.fail ? data.fail : 0,//上传失败的个数
    path = data.path[i].path ? data.path[i].path:"",
    id=data.id;
    console.log(id)
    console.log(data.path[i].path,"图片路径")
      wx.uploadFile({
        url: data.url,
        header: {
          "Authorization": "JWT " + that.globalData.jwt
        },
        filePath: path,
        name: 'image',//这里根据自己的实际情况改
        formData: {
          detail: data.path[i].cont,
          article: id,
        },//这里是上传图片时一起上传的数据
        success: (res) => {
          success++;//图片上传成功，图片上传成功的变量+1
          console.log(res)
          console.log(i);
          //这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
        },
        fail: (res) => {
          fail++;//图片上传失败，图片上传失败的变量+1
          console.log('fail:' + i + "fail:" + fail);
        },
        complete: () => {
          console.log(i);
          i++;//这个图片执行完上传后，开始上传下一张
          if (i == data.path.length) {   //当图片传完时，停止调用          
            console.log('执行完毕');
            console.log('成功：' + success + " 失败：" + fail);
          } else {//若图片还没有传完，则继续调用函数
            console.log(i);
            data.i = i;
            data.success = success;
            data.fail = fail;
            that.uploadimg(data);
          }

        }
      });
  }
})