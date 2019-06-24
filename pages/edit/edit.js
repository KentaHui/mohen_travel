// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titt: '请输入标题文字',
    showceng: false,
    showedittitt: false,
    showeditcontent: false,
    showreditcontent: false,
    edittitt: '',
    editcontent: '',
    reditcontent: '',
    target: '',
    content: [{
        leixing: 'txt',
        neirong: '我爱你'
      },
      {
        leixing: 'img',
        url: 'http://wechatpx.oss-cn-beijing.aliyuncs.com/card1_03.png'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  towrite: function(e) {
    var that = this
    var target = e.currentTarget.dataset.name
    that.setData({
      showceng: true,
      showedittitt: true,
      target: target,
      edittitt: ''
    })
  },
  editedtitt: function(e) {
    var that = this
    var target = that.target
    that.setData({
      titt: e.detail.value,
      showceng: false,
      showedittitt: false,
      [target]: e.detail.value
    })
  },
  ondelettitt: function(e) {
    var that = this
    wx.showModal({
      title: '重置标题',
      content: '您确定要重置标题吗？',
      success(res) {
        if (res.confirm) {
          that.setData({
            titt: '请输入标题文字'
          })
        } else if (res.cancel) { }
      },
      confirmColor: '#5677fc'
    })
  },
  ondelet: function(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var content = that.data.content
    wx.showModal({
      title: '删除提示',
      content: '您确定要删除这段编辑吗？',
      success(res) {
        if (res.confirm) {
          content.splice(index, 1)
          that.setData({
            content: content
          })
        } else if (res.cancel) {}
      },
      confirmColor: '#5677fc'
    })

  },
  addtxt: function() {
    var that = this
    var content = that.data.content
    that.setData({
      editcontent:'',
      showceng: true,
      showeditcontent: true
    })
  },
  editedcontent: function(e) {
    var that = this
    var input = new Object
    input.leixing = 'txt'
    input.neirong = e.detail.value
    var content = that.data.content
    content.push(input)
    that.setData({
      content:content,
      showceng: false,
      showeditcontent: false
    })
  },
  redit:function(e){
    var that = this
    var index = e.currentTarget.dataset.index
    var leixing = e.currentTarget.dataset.leixing
    var target = that.data.target
    if(leixing=='txt'){
      target = "content["+index+"].neirong"
      that.setData({
        reditcontent:'',
        showceng: true,
        showreditcontent: true,
        target: target
      })
    }else if(leixing=='img'){
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePaths = res.tempFilePaths
          target = "content[" + index + "].url"
          that.setData({
            [target]: tempFilePaths
          })
        }
      })
    }
  },
  reditedcontent: function (e) {
    var that = this
    var target = that.data.target
    that.setData({
      [target]: e.detail.value,
      showceng: false,
      showreditcontent: false,
    })
  },
  addimg:function(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        var input = new Object
        input.leixing = 'img'
        input.url = tempFilePaths
        var content = that.data.content
        content.push(input)
        that.setData({
          content: content,
        })
      }
    })
  },
  onsave:function(){
    
    wx.showToast({
      title: '上传成功！',
    })
  },
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