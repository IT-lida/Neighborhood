const fetch = require('../../utils/fetch')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menubarList: [],
    swiperList: [],
    loadingHidden: false,
    show: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch('slides').then(res => {
      this.setData({
        swiperList: res.data,
        loadingHidden: true,
        show: false
      })
    })
    fetch('categories').then(res => {
      this.setData({
        menubarList: res.data,
        loadingHidden: true,
        show: false
      })
    })

  //   wx.request({
  //     url: 'https://www.apiopen.top/weatherApi?city=西安',
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: res => {
  //       console.log(res.data)
       
  //     }
  //   })
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