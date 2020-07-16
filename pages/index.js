const util = require('../utils/util.js')

Page({
  data: {
    datetime: '',
    limit: '',
    array: [],
    resultshow: false,
    accounts: ["OH", "OC", "LH", "LC"],
    accountValues: ["oh", "oc", "lh", "lc"],
    accountIndex: 0,
  },
  bindDateChange: function (e) {
    this.setData({
      datetime: e.detail.value
    })
  },
  formInputChange(e) {
    this.setData({
      limit: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    this.setData({
      accountIndex: e.detail.value
    })
  },
  searchbtn: function (e) {
    this.setData({
      resultshow: true
    })
    var type = this.data.accountValues[this.data.accountIndex]
    var date = util.getDate(new Date(this.data.datetime));
    var limit = this.data.limit;
    this.requestRange(type, date, limit);
  },
  requestRange: function (type, date, limit) {
    var url = "http://www.malcolmli.cn:8050/range/" + type + "?date=" + date + "&limit=" + limit
    console.log(url)
    util.requestPromise(url)
      .then(res => {
        console.log(res.data.data)
        this.setData({
          array: res.data.data
        })
      })
  }
})