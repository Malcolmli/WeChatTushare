Page({
  data: {
    array: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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