const util = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    dateValue: "2020-01-01",

    serachType: ["创业板", "短线", "中线", "长线"],
    serachTypeValues: ["business", "short", "center", "long"],
    serachTypeIndex: 1,
    searchShow: true,
  },

  rules: [],
  formData: {},

  bindDateChange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  bindTypeChange: function (e) {
    this.setData({
      serachTypeIndex: e.detail.value
    })
    if (e.detail.value == 0) {
      this.setData({
        dateValue: "2020-01-01"
      })
    }
    if (e.detail.value == 1) {
      this.setData({
        dateValue: "2020-01-01"
      })
    }
    if (e.detail.value == 2) {
      this.setData({
        dateValue: "2019-01-01"
      })
    }
    if (e.detail.value == 3) {
      this.setData({
        dateValue: "2019-01-01"
      })
    }
  },

  searchbtn: function (e) {
    var type = this.data.serachTypeValues[this.data.serachTypeIndex]
    var date = util.getDateString(new Date(this.data.dateValue));
    this.requestRange(type, date);
  },
  requestRange: function (type, date) {
    var url = "https://www.malcolmli.cn:8060/back/" + type + "?startDate=" + date
    console.log(url)
    this.setData({
      searchShow: false,
    })
    util.requestPromise(url)
      .then(res => {
        this.setData({
          searchShow: true,
        })
        wx.setStorage({
          key: "listDate",
          data: res.data
        })
        wx.navigateTo({
          url: "list/list"
        })
      })
  }
})