// pages/strategy/detail/detail.js
Page({

  data: {
    code: "",
    name: "",
    start: "",
    end: "",
    tradeCalSum: "",
    startPrice: "",
    endPrice: "",
    profits: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.object)
    this.setData({
      code: options.code,
      name: options.name,
      start: options.start,
      end: options.end,
      tradeCalSum: options.tradeCalSum,
      startPrice: options.startPrice,
      endPrice: options.endPrice,
      profits: options.profits,
    })
    console.log(this.data.win15To23)
  },
})