const fetch = require('../../utils/fetch')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [],
    shops: [],
    pageIndex: 0,
    pageSize: 20,
    hasMore: true,
    loadingHidden: false
  },

  loadMore() {
    if(!this.data.hasMore) { return }
    let { pageIndex, pageSize } = this.data
    const params = { _page: ++pageIndex,_limit: pageSize }
    return fetch(`categories/${this.data.category.id}/shops`,params).then(res => {
      const shops = this.data.shops.concat(res.data)
      const totalCount = parseInt(res.header['X-Total-Count'])
      const hasMore = pageIndex * pageSize < totalCount
      this.setData({
        shops,
        pageIndex,
        hasMore,
        loadingHidden: true
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`categories/${options.cat}`).then(res => {
      this.setData({
        category: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name
      })
      this.loadMore()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.category.name) {
      wx.setNavigationBarTitle({
        title: this.data.category.name
      })
    }
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
    this.setData({
      shops: [],
      pageIndex: 0,
      pageSize: 20,
      hasMore: true,
    })
    this.loadMore().then(() => wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loadingHidden: false
    })
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})