var util = require('../../utils/util.js')

Page({
  data: {
    imgs: [],
    value: "",
    send: true
  },

  onLoad: function(options) {

  },

  currentValue(e) {
    this.setData({
      value: e.detail.value
    })
  },

  SendOutInfo() {
    if(!this.data.send) {
      return
    }
    
    if (this.data.imgs && this.data.value) {
      var pages = getCurrentPages();
      var Page = pages[pages.length - 1]; //当前页
      var prevPage = pages[pages.length - 2]; //上一个页面
      var info = prevPage.data
      this.setData({
        send: false
      })
      wx.showToast({
        title: '请稍等...',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(() => {
        wx.getUserInfo({
          success: res => {
            let { avatarUrl, nickName } = res.userInfo
            let timestamp = Date.parse(new Date())
            let currentTime = util.formatTime(new Date())
            let str = info.CommunityMessage
            str.unshift({
              "id": timestamp,
              "name": nickName,
              "headerIcon": avatarUrl,
              "message": this.data.value,
              "time": currentTime,
              "images": this.data.imgs
            })
            prevPage.setData({
              CommunityMessage: str
            })
            wx.showToast({
              title: '成功(*^_^*)！',
              icon: 'success',
              duration: 2000
            })
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 2300)
          }
        })
      }, 1500)
    } else {
       wx.showToast({
        title: '内容不能为空！',
        icon: 'none',
        duration: 2000
      })
      return 
    }
  },

  chooseImg() {
    let that = this;
    let len = this.data.imgs;
    if (len >= 9) {
      this.setData({
        lenMore: 1
      })


      return;
    }
    wx.chooseImage({
      success: (res) => {
        // console.log(res)
        let tempFilePaths = res.tempFilePaths;
        // console.log(tempFilePaths)
        let imgs = that.data.imgs;
        for (let i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length < 9) {
            imgs.push(tempFilePaths[i])
          } else {
            that.setData({
              imgs
            })
            wx.showModal({
              title: '提示',
              content: '最多只能有九张图片'
            })
            return;
          }
        }
        that.setData({
          imgs
        })
      }
    })
  },
  previewImg(e) {
    let index = e.currentTarget.dataset.index;
    let imgs = this.data.imgs;
    wx.previewImage({
      current: imgs[index],
      urls: imgs,
    })
  },
  deleteImg(e) {
    let _index = e.currentTarget.dataset.index;
    let imgs = this.data.imgs;
    imgs.splice(_index, 1);
    this.setData({
      imgs
    })
  }

})