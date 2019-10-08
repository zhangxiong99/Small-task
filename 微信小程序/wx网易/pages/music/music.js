const audio = wx.getBackgroundAudioManager()
const http = require('../../util/http')
Page({

  data: {
    
    isPlay:true,
    music:[]
  },
  onLoad: function (options) {
    let id = options.id;
    let title = options.title;
    let name = options.name;
    let imgUrl=decodeURIComponent(options.imgUrl)
    http(`/song/url?id=${id}`).then(res=>{
      var music = [];
      var songs = res.data.data[0];
      var obj={};
      obj.url = songs.url;
      obj.title = title;
      obj.name = name;
      obj.imgUrl = imgUrl;
      music.push(obj)
      this.setData({
        music
      })
    }) 
  },
  handleClick(event){
    var musicUrl = event.currentTarget.dataset.url;
    var title = event.currentTarget.dataset.title;
    var isPlay = this.data.isPlay;
    
    if(isPlay){
      audio.src = musicUrl;
      audio.title = title;
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