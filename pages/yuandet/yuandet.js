// pages/yuandet/yuandet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anchor: 'http://wechatpx.oss-cn-beijing.aliyuncs.com/%E6%9A%97%E5%AE%A0%E8%AE%A9anchor.jpg',
    nickname: '最美小溪',
    online: 123,
    follow:false,
    info1: '世界先进高性能材料,技术综合展!七大展会同时举行!覆盖高功能材料领域!本展预计聚集940家参展商,是您接触世界前端技术,与同行交流优秀平台!观展请点击主页申请免费入场劵',
    info2: '世界先进高性能材料,技术综合展!七大展会同时举行!覆盖高功能材料领域!本展预计聚集940家参展商,是您接触世界前端技术,与同行交流优秀平台!观展请点击主页申请免费入场劵',
    hdtitt: '要去台湾环岛自驾一周，你需要了解的都在这里',
    apply:false
  },
  follow: function () {
    var that = this
    var follow = that.data.follow;
    if (follow) {
      that.setData({
        follow: false
      })
      console.log(follow)
    } else {
      that.setData({
        follow: true
      })
      console.log(follow)
    }
  },
  onapply:function(){
    this.setData({
      apply:true
    })
    wx.showToast({
      title: '申请成功'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})