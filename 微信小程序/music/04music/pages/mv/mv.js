// pages/mv/mv.js
const http = require('../../util/http.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.getMvData(res=>{
      this.handleData(res)
    })
  },
  handleData(res){
    this.setData({
      mvs:res.data.data
    })
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/mvPlay/mvPlay?id='+id,
    })
  }
  
})