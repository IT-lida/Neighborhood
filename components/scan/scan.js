const app = getApp()


Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    timer:null
  },

  go: function() {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear'
    })
    this.timer = setInterval(() => {
      animation.translateY(200).step().translateY(0).step()

      this.setData({
        animationData: animation.export()
      })
    }, 1000)


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
   * 用户点击右上角转发
   */
  onShareAppMessage: function() {

  },

  /**
   * 页面滚动触发事件的处理函数
   */
  onPageScroll: function() {

  },

  /**
   * 当前是 tab 页时，点击 tab 时触发
   */
  onTabItemTap: function(item) {

  },
})