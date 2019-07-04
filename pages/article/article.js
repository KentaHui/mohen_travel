// pages/messagedetail/messagedetail.js
//获取应用实例
// 引入api.js
var api = require("../../api/api.js")
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: null,
    click_num: "",
    fav_num: "",
    evalist: [
      { img: "/images/sl_03.png", user: "墨痕", date: "1天前",cont:"就很棒" },
      { img: "/images/sl_03.png", user: "墨痕", date: "1天前",cont:"就很棒" },
      { img: "/images/sl_03.png", user: "墨痕", date: "1天前",cont:"就很棒" },
      { img: "/images/sl_03.png", user: "墨痕", date: "1天前",cont:"就很棒" },
      { img: "/images/sl_03.png", user: "墨痕", date: "1天前",cont:"就很棒" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    that.setData({
      id: options.id
    })
    that.getdetail()
  },
  getdetail() {
    var that = this;
    wx.request({
      url: api.Detail + that.data.id,
      method: "get",
      header: {
        "Authorization": "JWT" + app.globalData.jwt
      },
      success(res) {
        console.log(res.data)
        that.setData({
          details: res.data,
          click_num: res.data.click_num,
          fav_num: res.data.fav_num
        })
      }
    })
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
    console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上啦")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})