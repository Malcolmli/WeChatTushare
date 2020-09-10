// pages/strategy/list/list.js
Page({

  data: {
    query:"",
    query1:"",
    query2:"",
    query3:"",
    query4:"",
    winRate: "",
    annualYield: "",
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
          query: res.data.apiParam.query,
          query1: res.data.apiParam.period,
          query2: res.data.apiParam.upper_income,
          query3: res.data.apiParam.lower_income,
          query4: res.data.apiParam.fall_income,
          winRate: res.data.reportData.winRate,
          annualYield: res.data.reportData.annualYield,
          select: res.data.pickData.stock
        })
      }
    })
  }
})