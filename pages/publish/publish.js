// pages/yuan/yuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ],
    tabindex: 0,
    tab: [
      {
        titt: '全部',
      },
      {
        titt: '审核中',
      },
      {
        titt: '已审核',
      },
      {
        titt: '已拒绝',
      }
    ]
  },
  ontab: function (e) {
    this.setData({
      tabindex: e.currentTarget.dataset.index
    })
  },
  topost: function() {
    wx.navigateTo({
      url: '../../pages/postyuan/postyuan'
    })
  },
  toyuandet: function() {
    wx.navigateTo({
      url: '../../pages/yuandet/yuandet'
    })
  },
  toedit: function () {
    wx.navigateTo({
      url: '../../pages/edit/edit'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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