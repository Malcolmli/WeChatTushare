// pages/strategy/list/list.js
Page({

  data: {
    info1: "",
    info2: "",
    select: "",
    array: [],
  },
  onShow: function (options) {
    var self = this
    wx.getStorage({
      key: 'listDate',
      success(res) {
        console.log(res.data)
        self.setData({
          array: res.data.historyDetails,
          info1: res.data.reportData.winRate,
          info2: res.data.reportData.annualYield,
          select: res.data.pickData.stock
        })
      }
    })
  }


})