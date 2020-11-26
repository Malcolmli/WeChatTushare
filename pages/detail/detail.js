const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    type: "",
    targe: "",
    date: "",
    code: "",
    name: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type,
      targe: options.targe,
      date: options.date,
      code: options.code,
      name: options.name,
    })
    this.requestRange(options.type, options.targe, options.date, options.code)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  requestRange: function (type, targe, date, code) {
    var url = "https://www.malcolmli.cn:8050/" + type + "/" + targe + "?date=" + date + "&code=" + code
    console.log(url)
    this.setData({
      searchShow: false,
    })
    util.requestPromise(url)
      .then(res => {
        this.setData({
          searchShow: true,
        })
        if (res.data.errorMsg != null) {
          wx.showToast({
            title: res.data.errorMsg,
            icon: 'none',
          })
        } else {
          console.log(res.data.data)
          this.setData({
            array: res.data.data
          })
        }
      })
  }
})