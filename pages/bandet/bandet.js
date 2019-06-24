// pages/yuandet/yuandet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anchor: 'http://wechatpx.oss-cn-beijing.aliyuncs.com/%E6%9A%97%E5%AE%A0%E8%AE%A9anchor.jpg',
    nickname: '最美小溪',
    online: 123,
    follow: false,
    info1: '李小牧自费去日本留学，是东京服装学院毕业的第一个中国大陆学生。 2002年，李小牧的自传《歌舞伎町案内人》在日本出版发行后，迅速登上了畅销书排行榜。参加了凤凰卫视的《歌舞伎町的皮条客》',
    info2: '世界先进高性能材料,技术综合展!七大展会同时举行!覆盖高功能材料领域!本展预计聚集940家参展商,是您接触世界前端技术,与同行交流优秀平台!观展请点击主页申请免费入场劵',
    hdtitt: '一个真正的旅行家必是一个流浪者，经历着流浪者的快乐',
    apply: false,
    local:'上海',
    sex:'小哥哥',
    tips:['人很好','态度超级赞','很专业','很美腻'],
    pl:[
      {
        anchor:'http://wechatpx.oss-cn-beijing.aliyuncs.com/%E6%9A%97%E5%AE%A0%E8%AE%A9anchor.jpg',
        name:'不知火舞',
        txt:'超级棒，品牌的丝袜质量信得过 ，弹性好，样子好看，发货快，特别好，服务好，五星好评，颜色很正，穿上很舒服，而且也不容易脱丝'
      },
      {
        anchor: 'http://wechatpx.oss-cn-beijing.aliyuncs.com/%E6%9A%97%E5%AE%A0%E8%AE%A9anchor.jpg',
        name: '不知火舞',
        txt: '超级棒，品牌的丝袜质量信得过 ，弹性好，样子好看，发货快，特别好，服务好，五星好评，颜色很正，穿上很舒服，而且也不容易脱丝'
      },
      {
        anchor: 'http://wechatpx.oss-cn-beijing.aliyuncs.com/%E6%9A%97%E5%AE%A0%E8%AE%A9anchor.jpg',
        name: '不知火舞',
        txt: '超级棒，品牌的丝袜质量信得过 ，弹性好，样子好看，发货快，特别好，服务好，五星好评，颜色很正，穿上很舒服，而且也不容易脱丝'
      }
    ]
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
  onapply: function () {
    this.setData({
      apply: true
    })
    wx.showToast({
      title: '预约成功'
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