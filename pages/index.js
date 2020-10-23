const util = require('../utils/util.js')

Page({
  data: {
    limit: 6,

    dateValue: "",

    serachType: ["均幅", "胜率"],
    serachTypeValues: ["range", "ratio"],
    serachTypeIndex: 0,
    searchShow: true,

    serachTarge: ["开高", "开闭", "低高", "低闭"],
    serachTargeValues: ["oh", "oc", "lh", "lc"],
    serachTargeIndex: 0,

    rules: [{
      name: 'limit',
      rules: {
        required: true,
        message: '限制 不能为空!'
      }
    }],
    formData: {

    },
  },
  onReady: function () {
    var url='https://www.malcolmli.cn:8050/tool/latestData'
    util.requestPromise(url).then(res => {
      this.setData({
        dateValue: res.data
      })
    })
  },
  bindDateChange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  formInputChange(e) {
    const {
      field
    } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value,
    })
  },
  bindTypeChange: function (e) {
    this.setData({
      serachTypeIndex: e.detail.value
    })
    if (e.detail.value == 0) {
      this.setData({
        limit: 6
      })
    }
    if (e.detail.value == 1) {
      this.setData({
        limit: 0.8
      })
    }
  },
  bindTargeChange: function (e) {
    this.setData({
      serachTargeIndex: e.detail.value
    })
  },
  searchbtn: function (e) {
    var type = this.data.serachTypeValues[this.data.serachTypeIndex]
    var targe = this.data.serachTargeValues[this.data.serachTargeIndex]
    var date = this.data.dateValue.replace(/-/g,'');
    var limit = this.data.limit;
    this.requestRange(type, targe, date, limit);
  },
  requestRange: function (type, targe, date, limit) {
    var url = "https://www.malcolmli.cn:8050/" + type + "/" + targe + "?date=" + date + "&limit=" + limit
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
          wx.setStorage({
            key: "listDate",
            data: res.data.data
          })
          wx.navigateTo({
            url: "list/list"
          })
        }
      })
  }
})