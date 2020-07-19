const util = require('../utils/util.js')

Page({
  data: {
    dateValue: util.getDateTime(),
    array: [],
    resultshow: false,

    serachType: ["均幅", "胜率"],
    serachTypeValues: ["range", "ratio"],
    serachTypeIndex: 0,

    serachTarge: ["OH", "OC", "LH", "LC"],
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
  },
  bindTargeChange: function (e) {
    this.setData({
      serachTargeIndex: e.detail.value
    })
  },
  searchbtn: function (e) {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors)
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          wx.showToast({
            title: errors[firstError[0]].message,
            icon: 'none',
          })
        }
      } else {
        this.setData({
          resultshow: true
        })
        var type = this.data.serachTypeValues[this.data.serachTypeIndex]
        var targe = this.data.serachTargeValues[this.data.serachTargeIndex]
        var date = util.getDate(new Date(this.data.dateValue));
        var limit = this.data.formData.limit;
        this.requestRange(type, targe, date, limit);
      }
    })
  },
  requestRange: function (type, targe, date, limit) {
    var url = "https://www.malcolmli.cn:8050/" + type + "/" + targe + "?date=" + date + "&limit=" + limit
    console.log(url)
    util.requestPromise(url)
      .then(res => {
        console.log(res.data.data)
        if (res.data.errorMsg != null) {
          wx.showToast({
            title: res.data.errorMsg,
            icon: 'none',
          })
        } else {
          this.setData({
            array: res.data.data
          })
        }
      })
  }
})