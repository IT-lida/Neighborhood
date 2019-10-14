// pages/massage/massage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CommunityMessage: [
      {
        "id": 1,
        "name": "李大爷",
        "headerIcon": "../../image/boy.png",
        "message": "今天天气真好，我带着老惠来钓鱼，收获满满",
        "time": "9个小时前",
        "images": [
          "../../image/fish_01.jpg",
          "../../image/fish_02.jpg"
        ]
      },
      {
        "id": 2,
        "name": "刘大妈",
        "headerIcon": "../../image/girl.png",
        "message": "好久没有跳的这么开心了，跟姐妹们一起真好",
        "time": "2个小时前",
        "images": [
          "../../image/dance_01.jpg"
        ]
      },
      {
        "id": 3,
        "name": "卖菜小刁",
        "headerIcon": "../../image/boy.png",
        "message": "新鲜蔬菜大放价，前十名一律八折，每日一鲜，只为你更好的生活做保障，小刁为你真情服务，快来选购吧",
        "time": "刚刚",
        "images": [
          "../../image/Vegetables_01.jpg"
        ]
      }
    ]
  },

  previewImage(e) {
    console.log(e.target.dataset)
    console.log(this.data.CommunityMessage[0].images)
    wx.previewImage({
      current: e.target.dataset, // 当前显示图片的http链接
      urls: ['this.data.CommunityMessage[0].images'] // 需要预览的图片http链接列表
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