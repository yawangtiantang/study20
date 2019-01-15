// pages/detail/detail.js
var postData = require('../../data/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   detail: postData.postList,
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: parseInt(options.id)
    })
  },
  last: function(e) {
    if (this.data.id <=0) return false
     {
      this.setData({
        id: this.data.id - 1
      })
    }
  },
  next: function(e) {
    if (this.data.id >= this.data.detail.length - 1) return false
    {
      this.setData({
        id: this.data.id + 1
      })
    }
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