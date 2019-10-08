const http = require("../../utils/http.js")
Page({
  data: {
    detail:[],
    music:[],
    isFolded:true
  },
  onLoad: function (options) {
    let id = options.id;
    http(`/album?id=${id}`).then(res=>{
      var songs = res.data.songs 
      var music = []
      songs.forEach(item=>{
        var obj = {};
        obj.name = item.ar[0].name;
        obj.title = item.name;
        music.push(obj)
      })
      this.setData({
        music
      })
      var detail = []
      var album = res.data.album
      var obj= {};
      obj.pic = album.picUrl;
      obj.name= album.name;
      obj.artists = album.artists[0].name
      obj.description = album.description
      obj.time = Math.floor((album.publishTime/1000/3600/24/365)+1970)+"-"+Math.floor(album.publishTime/1000/3600/24%365/30)+"-"+Math.floor(album.publishTime/1000/3600/24%365%30)
      detail.push(obj)
      this.setData({
        detail
      })
    })
  },
  change: function (e) {
    this.setData({
      isFolded: !this.data.isFolded,
    })
  }
})