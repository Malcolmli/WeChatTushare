Page({
  data: {
    array: [],
    type: "",
    targe: "",
    date: "",
  },
  onLoad: function (options) {
    var self = this
    this.setData({
      type: options.type,
      targe: options.targe,
      date: options.date,
      code: options.code,
    })
    wx.getStorage({
      key: 'listDate',
      success(res) {
        console.log(res.data)
        self.setData({
          array: res.data
        })
      }
    })
  }
})