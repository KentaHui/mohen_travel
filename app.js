//app.js
var api = require("./api/api.js"); //引入apijs
App({
  onLaunch: function () {
    console.log("奇行启动")
    //调用API从本地缓存中获取数据
    var jwt = wx.getStorageSync('jwt');
    var that = this;
    //获取用户定位
    that.getlocal();
    if (!jwt) {
      //检查 jwt 是否存在 如果不存在调用登录
    } else {
      this.globalData.jwt = jwt
    }
  },
  getlocal(){
    var  that = this ;
    wx.authorize({
      scope: 'scope.userLocation',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.getLocation({
          type: 'wgs84',
          success(res) {
            //获取成功进行位置比对
            console.log(res)
          }
        })
      }
    })
  },
  login: function (e) {
    var userinfo = e
    // 登录部分代码
    var that = this;
    wx.showLoading({
      title: 'loading',
      icon:'none'
    })
    wx.login({
      // 调用 login 获取 code
      success: function (res) {
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
          success: function (res) {
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
              wx.hideLoading()
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
          fail: function (res) {
          }
        })
      }
    })
  },
  register: function (e) {
    // 注册代码
    console.log("register")
    var that = this;
    var userinfo = e
    console.log("e",e)
    wx.login({ // 调用登录接口获取 code
      success: function (res) {
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
          success: function (res) {
            console.log(res)
            if (res.statusCode == 201) {
              that.login(userinfo);
            }
            if (res.statusCode == 401) {
              that.register(userinfo);
            }
          },
          fail: function (res) {
            console.log(res,"注册失败")
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
})