//index.js
//获取应用实例
var b= require('../../models/http.js');
Page({
  data: {
    msg:"hello",
    arr:['html','css','javascript'],
    isFocus:false,
    isPlay:false,
    test:false
  },
  handleConfirm(event){
    console.log(event.detail)
  },
  handleSubmit(event){
    console.log(event.detail.value)
  },
  handleClick(){
    this.setData({
      msg:"change"
    })
  },
  onLoad(){
    console.log(b.a)
    // wx-request
    var reqTask = wx.request({
      url: 'http://192.168.14.49:3000/search?keywords=你',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      success: (result)=>{
          console.log(result)
      }
    });
  },
  onReady(){
    console.log("ready")
  },
  onShow(){
    console.log("show")
  },
  handleMusic(){
    this.setData({
      isPlay:!this.data.isPlay
    })
  }
})
