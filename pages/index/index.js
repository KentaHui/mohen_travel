//index.js
//获取应用实例
// 引入api.js
var api=require("../../api/api.js")
const app = getApp()

Page({
  data: {
    showlogin:true,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    imgUrls: [
      'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_02.jpg',
      'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_02.jpg',
      'http://wechatpx.oss-cn-beijing.aliyuncs.com/qixing/pic_02.jpg'
    ],
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
  onLoad: function () {
    var that =this
    console.log('获取mohennet.xyz数据')
    that.geturl();
    that.getswiper()
    const jwt=wx.getStorageSync("jwt")
    if(!jwt){
      that.setData({
        showlogin: true
      })
    }else{
      that.setData({
        showlogin: false
      })
    }
  },
  toplaydetail(e){
    var that = this ;
    console.log(e.currentTarget.dataset.index)
    var i = e.currentTarget.dataset.index
    if(i==1){
      var title = "吃无不尽"
    }else if(i==2){
      var title = "玩天玩地"
    }else if(i==3){
      var title = "景点情报"
    }else if(i==4){
      var title = "攻略随行"
    }
    wx.navigateTo({
      url: '/pages/playdetail/playdetail?index='+i+"&title="+title,
    })
  },
  bindGetUserInfo(e) {
    app.login(e)
    this.setData({
      showlogin:false
    })
  },
  banner(e){
    var  that = this ;
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/article/article?id=' + id
    })
  },
  getswiper(){
    var that = this ;
    wx.request({
      url: api.Banner,
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res,"banner")
        that.setData({
          imgUrls:res.data
        })
      },
    })
  },
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  geturl:function(){
    var that = this;
    // 生成页面的二维码
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=18_4lNMGIAJEkg1P8E-6kqFhPVl1rWahaqBkIOT9HUbLdVZ_w0VNz1Z5HKvUeAOthaaruSsKdXKKMx2K8bkQsliSgM-IZDsq0GVsIW5xy73bb6BWFfa7odO0IwsNmaLrE5hc9fyYJhJ5B-ZGD8QMJRjAJAZWE',
      data: {
        scene: '000',
        page: "pages/index/index"
      },
      method: "POST",
      responseType: 'arraybuffer',  //设置响应类型
      success(res) {
        console.log(res)
        var src2 = wx.arrayBufferToBase64(res.data);  //对数据进行转换操作
        that.setData({
          src2
        })
      },
      fail(e) {
        console.log(e)
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
  toarticle:function(){
    wx:wx.navigateTo({
      url: '/pages/article/article'
    })
  }
})