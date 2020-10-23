Page({
  data: {
    array: [],
  },
  onShow: function (options) {
    var self = this
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