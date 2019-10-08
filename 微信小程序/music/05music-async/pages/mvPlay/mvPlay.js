const http  = require('../../util/http')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var {id} = options;
    http.getMvUrl(id,res=>{
      this.setData({
        url:res.data.data.url
      })
      console.log(res.data.data.url)
    })
  },
})