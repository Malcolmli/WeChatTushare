const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * requestPromise用于将wx.request改写成Promise方式
 * @param：{string} myUrl 接口地址
 * @return: Promise实例对象
 */
const requestPromise = myUrl => {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      success: res => resolve(res)
    })
  })
}

const getDate = date => {
  var date = new Date(date);
  var Str = date.getFullYear() +
    (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
  return Str;
}

const requestRange = (type, date, limit) => {
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

module.exports = {
  formatTime: formatTime,
  getDate: getDate,
  requestPromise: requestPromise,
  requestRange: requestRange,
}