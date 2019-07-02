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
    customItem: "全部",
    region: ['省', '市', '区/县'],
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
      comments: 12,
      next: null
    }]
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
    wx.setNavigationBarTitle({
      title: options.title
    });

  },
  // 地区选择
  bindRegionChange: function(e) {
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
      method: "get",
      header: {
        "Authorization": "JWT" + app.globalData.jwt
      },
      success(res) {
        console.log(res.data)
        that.setData({
          list: res.data.results,
          next: res.data.next
        })
      },
      fail(res) {

      }
    })
  },
  //图片点击事件
  imgYu: function(event) {
    var src = event.currentTarget.dataset.src; //获取data-src
    var imgList = event.currentTarget.dataset.list; //获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  toarticle: function(e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/article/article?id=' + id
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
    console.log("下拉")

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上啦")
    wx.showNavigationBarLoading()
    var that = this;
    if (!that.data.next) {
      wx.hideNavigationBarLoading()
      wx.showToast({
        title: '已到底部',
        icon: "none"
      })
    } else {
      wx.request({
        url: that.data.next,
        data: {
          category_type: that.data.index
        },
        method: "get",
        header: {
          "Authorization": "JWT" + app.globalData.jwt
        },
        success(res) {
          wx.hideNavigationBarLoading()
          console.log(res.data)
          that.data.list = that.data.list.concat(res.data.results)
          that.setData({
            list: that.data.list,
            next: res.data.next
          })

        },
        fail(res) {

        }
      })
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})