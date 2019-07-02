//获取应用实例
// 引入api.js
var api = require("../../api/api.js")
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showadd: false,
    content: [],
    title: null,
    addindex: null,
    customItem: "全部",
    type:null,
    region: ['省', '市', '区/县'],
  },
  reditedtitle(e) {
    var that = this;
    var value = e.detail.value
    that.setData({
      title: value
    })
  },
  reditedcontent(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var value = e.detail.value
    that.data.content[index].cont = value;
    that.setData({
      content: that.data.content
    })
  },
  // 完成
  ok() {
    var that = this;
    wx.showActionSheet({
      itemList: ["保存", "发布"],
      success: function(res) {
        if (res.tapIndex == 0) {
          console.log("保存")
        }
        if (res.tapIndex == 1) {
          console.log("发布")
          console.log(app.globalData.jwt)
          wx.request({
            url: api.Publish,
            method:"post",
            dataType:"json",
            header: {
              "Authorization": "JWT " + app.globalData.jwt
            },
            data:{
              "category_type": that.data.type,
              "province": that.data.region[0],
              "city": that.data.region[1],
              "district": that.data.region[2],
              "title":that.data.title,
              "click_num": 0,
              "fav_num":0
            },
            success(res){
              console.log(res)
              var id= res.data.id
              var pics = that.data.content;
              app.uploadimg({
                url: api.Content,//这里是你图片上传的接口
                path: pics,//这里是选取的图片的地址数组
                id:id
              });
            },
            fail(){
              console.log("失败")
            }
          })
        }
      }
    })
  },
  // 发布
  release() {
    var that = this;
    wx: wx.request({
      url: api.Publish,
      data: {
        "category_type": that.data.type,
        "province": that.data.region[0],
        "city": that.data.region[1],
        "district": that.data.region[2],
        "title": that.data.title,
        "click_num": null,
        "fav_num": null
      },
      header: {
        "Authorization": "JWT" + app.globalData.jwt
      },
      method: 'post',
      dataType: 'json',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(errmsg)
      },
    })
  },
  // 地区选择
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })

  },
  // 上移
  totop(e) {
    console.log(e)
    var that = this;
    let index = e.currentTarget.dataset.index
    var index1 = index + 1
    var arr = that.data.content
    var arr = arr.slice(index, index1)
    console.log(arr)
    that.data.content.splice(index, 1)
    that.data.content.splice(index - 1, 0, arr[0])
    that.setData({
      content: that.data.content
    })
    console.log(that.data.content)
  },
  // 下移
  tobottom(e) {
    var that = this;
    let index = e.currentTarget.dataset.index
    var index1 = index + 1
    var arr = that.data.content
    var arr = arr.slice(index, index1)
    console.log(arr)
    that.data.content.splice(index, 1)
    that.data.content.splice(index + 1, 0, arr[0])
    that.setData({
      content: that.data.content
    })
    console.log(that.data.content)
  },
  // 删除
  delet(e) {
    var that = this;
    let index = e.currentTarget.dataset.index
    that.data.content.splice(index, 1)
    that.setData({
      content: that.data.content
    })
  },
  // 更换图片
  chooseimg(e) {
    var that = this;
    let index = e.currentTarget.dataset.index
    if (that.data.content[index].path == "/images/add_01.png") {
      wx.chooseImage({
        success: function(res) {
          that.data.content[index].path = res.tempFilePaths[0]
          that.setData({
            content: that.data.content
          })
        },
      })
    } else {
      wx.showActionSheet({
        itemList: ["替换图片", "删除图片"],
        success: function(res) {
          if (res.tapIndex == 0) {
            wx.chooseImage({
              success: function(res) {
                that.data.content[index].path = res.tempFilePaths[0]
                that.setData({
                  content: that.data.content
                })
              },
            })
          }
          if (res.tapIndex == 1) {
            that.data.content[index].path = "/images/add_01.png"
            that.setData({
              content: that.data.content
            })
          }
        }
      })
    }


  },
  add(e) {
    var that = this;
    if (that.data.addindex == e.currentTarget.dataset.index) {
      that.setData({
        addindex: -2
      })
    } else {
      that.setData({
        addindex: e.currentTarget.dataset.index
      })
    }
  },
  // 添加图片
  addimg(e) {
    var that = this;
    console.log("addimg", e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    that.setData({
      showadd: false
    })
    wx.chooseImage({
      success: function(res) {
        console.log(res.tempFiles)
        var img = res.tempFiles[0]
        that.data.content.splice(index + 1, 0, img)
        that.setData({
          content: that.data.content,
          addindex: -2
        })
        console.log(that.data.content)
      },
    })
  },
  // 添加文字
  addtext(e) {
    var that = this;
    console.log("addtext", e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    that.setData({
      showadd: false
    })
    var newcont = {
      path: "/images/add_01.png",
      cont: ""
    }
    that.data.content.splice(index + 1, 0, newcont)
    that.setData({
      content: that.data.content,
      addindex: -2
    })
    console.log(that.data.content)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options)
    that.setData({
      type:options.type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})