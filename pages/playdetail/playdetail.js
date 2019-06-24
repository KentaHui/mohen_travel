// pages/playdetail/playdetail.js
//获取应用实例
// 引入api.js
var api = require("../../api/api.js")
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    region: ['广东省', '广州市','荔湾区'],
    list: [{
        userid: 'Crasty',
        tips: '旅行攻略',
        time: '2分钟前',
        avatar: 'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_16.jpg',
        titt: '要去台湾环岛自驾一周，你需要了解的都在这里',
        subtitt: '台湾自驾游 驾照 , 房东热情好客 , 24小时中文客服 , 拥有非凡旅行体验 , 适合朋友, taiwan自助游, 官网订住宿, 盛夏优惠, 如果优惠300元那么可以选台湾自驾游 驾照, 房东热情好客',
        img: [
          'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_19.jpg',
          'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_21.jpg',
          'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_23.jpg',
        ],
        likes: 23,
        comments: 12
      },
      {
        userid: 'Kenta',
        tips: '欧洲路书',
        time: '15分钟前',
        avatar: 'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_16.jpg',
        titt: '要去台湾环岛自驾一周，你需要了解的都在这里',
        subtitt: '台湾自驾游 驾照 , 房东热情好客 , 24小时中文客服 , 拥有非凡旅行体验 , 适合朋友, taiwan自助游, 官网订住宿, 盛夏优惠, 如果优惠300元那么可以选台湾自驾游 驾照, 房东热情好客',
        img: [
          'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_19.jpg',
          'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_21.jpg',
          'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_23.jpg',
        ],
        likes: 23,
        comments: 12
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options)
    that.setData({
      index: options.index
    })
    that.getdetail()
  },
  // 地区选择
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 获取详情
  getdetail: function() {
    var that = this;
    wx.request({
      url: api.Pushlist,
      data: {
        category_type: that.data.index
      },
      method:"get",
      header: {
        "Authorization": "JWT" + app.globalData.jwt
      },
      success(res) {
        console.log(res.data)
      },
      fail(res) {

      }
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