// pages/component/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    tsCode: "",
    tsName: "",
    netBuy: "",
    count15: "",
    win15To23: "",
    win15To24: "",
    count30: "",
    win30To23: "",
    win30To24: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.object)
    this.setData({
      name: options.name,
      tsCode: options.tsCode,
      tsName: options.tsName,
      netBuy: options.netBuy,
      count15: options.count15,
      win15To23: options.win15To23,
      win15To24: options.win15To24,
      count30: options.count30,
      win30To23: options.win30To23,
      win30To24: options.win30To24,
    })
    console.log(this.data.win15To23)
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