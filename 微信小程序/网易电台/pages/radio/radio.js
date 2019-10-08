
const audio = wx.getBackgroundAudioManager()
const http = require('../../utils/http')

Page({
  data: {
    radio:[],
    isPlay:true
  },
  onLoad: function (options) {
    let id = options.id;
    let name = options.name;
    let title = options.title;
    let subcount = options.subcount;
    let imgurl = unescape(options.imgurl)
    let blururl = unescape(options.blururl)
    let picurl = unescape(options.picurl)
    http(`/song/url?id=${id}`).then(res=>{
      var radio = [];
      var song = res.data.data[0];
      var obj={}
      obj.url=song.url
      obj.name = name;
      obj.title = title;
      obj.subcount = subcount;
      obj.imgurl = imgurl;
      obj.blururl = blururl;
      obj.picurl = picurl
      radio.push(obj)
      this.setData({
        radio
      })
    })
  },
  handleClick(event){
    var radiourl = event.currentTarget.dataset.url;
    var name = event.currentTarget.dataset.name;
    var isPlay = this.data.isPlay;
    if(isPlay){
      audio.src = radiourl;
      audio.title = name;
      this.setData({
        isPlay:isPlay
      })
    }else{
      audio.pause();
      this.setData({
        isPlay: !isPlay
      })
  }
  isPlay=!isPlay;
    this.setData({
      isPlay
    })
  }
})