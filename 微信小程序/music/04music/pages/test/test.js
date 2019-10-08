const http = require('../../util/http');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载数据"
    });
    http.getMvData(res=>{
      console.log(res)
    })
  }
})