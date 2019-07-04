// pages/me/me.js
var api = require("../../api/api.js")
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showceng:false,
    showrole:false,
    roleindex:0,
    role:'游客',
    open: false,
    name: '侏罗纪的猫',
    sub: '简介简介简介简介简介简介简介简介',
    tips: ['旅行伴侣首选','95后', 'lv.6', '北京'],
    follow: false,
    tab1: true,
    tab2: false,
    rolelist:[
      {
        tu: '/images/role_03.png',
        name:'游客'
      },
      {
        tu: '/images/role_05.png',
        name: '活动组织'
      },
      {
        tu: '/images/role_08.png',
        name: '导游'
      },
    ],
    info: [
      {
        topic: '创建的列表',
        list: [
          {
            suo: '/images/pic_38.png',
            name: '听歌学英文1',
            subname: '用一首歌的时间学习英文',
            update: '6月12日',
            author: 'Angel',
            ltype: 'type1',
            open: false
          },
          {
            suo: '/images/pic_37.png',
            name: '听歌学英文2',
            subname: '用一首歌的时间学习英文',
            update: '8月3日',
            author: 'Kely',
            ltype: 'type1',
            open: true,
          },
          {
            suo: '/images/pic_36.png',
            name: '听歌学英文3',
            subname: '用一首歌的时间学习英文',
            update: '9月16日',
            author: 'John',
            ltype: 'type1',
            open: true
          },
        ]
      },
      {
        topic: '分享的列表',
        list: [
          {
            suo: '/images/pic_38.png',
            name: '听歌学英文1',
            subname: '用一首歌的时间学习英文',
            update: '6月12日',
            author: 'Angel',
            ltype: 'type2'
          },
          {
            suo: '/images/pic_37.png',
            name: '听歌学英文2',
            subname: '用一首歌的时间学习英文',
            update: '8月3日',
            author: 'Kely',
            ltype: 'type2'
          },
          {
            suo: '/images/pic_36.png',
            name: '听歌学英文3',
            subname: '用一首歌的时间学习英文',
            update: '9月16日',
            author: 'John',
            ltype: 'type2'
          },
        ]
      }
    ]
  },
  choserole:function(e){
    var that = this
    that.setData({
      roleindex: e.currentTarget.dataset.index,
      role: e.currentTarget.dataset.name
    })
  },
  onrole:function(){
    this.setData({
      showceng: true,
      showrole: true
    })
  },
  ondone: function () {
    this.setData({
      showceng: false,
      showrole: false
    })
  },
  onceng: function () {
    this.setData({
      showceng: false,
      showrole: false
    })
  },
  onopen: function (e) {
    var that = this
    var i = e.currentTarget.dataset.index
    var ifopen = that.data.info[0].list[i].open
    var open = "info[0].list[" + i + "].open"
    if (ifopen) {
      that.setData({
        [open]: false
      })
    } else {
      that.setData({
        [open]: true
      })
    }
  },
  ontab1: function () {
    this.setData({
      tab1: true,
      tab2: false
    })
  },
  topublish: function () {
    wx.navigateTo({
      url: '/pages/publish/publish'
    })
  },
  tomessages: function () {
    wx.navigateTo({
      url: '/pages/messages/messages'
    })
  },
  toshoprz: function () {
    wx.navigateTo({
      url: '/pages/shoprz/shoprz'
    })
  },
  tolike: function () {
    wx.navigateTo({
      url: '/pages/like/like'
    })
  },
  tobaninfo: function () {
    wx.navigateTo({
      url: '/pages/baninfo/baninfo'
    })
  },
  tofollow: function () {
    wx.navigateTo({
      url: '/pages/follow/follow'
    })
  },
  tomessage: function () {
    wx.navigateTo({
      url: '/pages/message/message'
    })
  },
  topersonrz: function () {
    wx.navigateTo({
      url: '/pages/personrz/personrz'
    })
  },
  ontab2: function () {
    this.setData({
      tab2: true,
      tab1: false
    })
  },
  onfollow: function () {
    var that = this
    if (that.data.follow) {
      that.setData({
        follow: false
      })
    } else {
      that.setData({
        follow: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this ;
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