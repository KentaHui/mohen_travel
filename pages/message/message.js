// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabindex:0,
    tab:[
      {
        titt: '申请消息',
      },
      {
        titt: '系统消息',
      }
    ],
    apply:[
      {
        name:'周杰伦',
        tips:'旅行周计划',
        time:'2018/11/29',
        done:false,
      },
      {
        name: '周杰伦',
        tips: '旅行周计划',
        time: '2018/11/29',
        done:false,
      },
      {
        name: '周杰伦',
        tips: '旅行周计划',
        time: '2018/11/29',
        done:true
      },
      {
        name: '周杰伦',
        tips: '旅行周计划',
        time: '2018/11/29',
        done: true
      },
      {
        name: '周杰伦',
        tips: '旅行周计划',
        time: '2018/11/29',
        done: true
      },
    ],
    system: [
      {
        name: '系统通知你完成了生涯挑战',
        tips: '旅行周计划',
        time: '2018/11/29',
        done: false,
      },
      {
        name: '系统通知你完成了生涯挑战',
        tips: '旅行周计划',
        time: '2018/11/29',
        done: false,
      },
      {
        name: '系统通知你完成了生涯挑战',
        tips: '旅行周计划',
        time: '2018/11/29',
        done: true
      },
      {
        name: '系统通知你完成了生涯挑战',
        tips: '旅行周计划',
        time: '2018/11/29',
        done: true
      },
      {
        name: '系统通知你完成了生涯挑战',
        tips: '旅行周计划',
        time: '2018/11/29',
        done: true
      },
    ]
  },
  onapply:function(){
    wx.navigateTo({
      url: '/pages/applydetail/applydetail'
    })
  },
  onlist: function () {
    wx.navigateTo({
      url: '/pages/messagedetail/messagedetail'
    })
  },
  ontab:function(e){
    this.setData({
      tabindex: e.currentTarget.dataset.index
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