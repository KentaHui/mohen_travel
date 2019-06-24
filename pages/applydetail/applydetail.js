// pages/yuan/yuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reasonindex:'',
    showceng:false,
    showrefused:false,
    list: {
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
    reasons: ['我们已经满员', '您的特长不符合', '年龄太小', '地域不同', '不符合性别要求', '其他'],
    textarea:''
  },
  onrefused:function(){
    this.setData({
      showceng:true,
      showrefused:true
    })
  },
  onreasons:function(e){
    this.setData({
      reasonindex: e.currentTarget.dataset.index,
      textarea: e.currentTarget.dataset.text
    })
  },
  onsubmit: function () {
    this.setData({
      showceng: false,
      showrefused: false
    })
  },
  onceng: function () {
    this.setData({
      showceng: false,
      showrefused: false
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