var HTTP = require('../../models/HTTP.JS')
Page({
  data: {
    offset:0,
    playlists:[]
  },
  onLoad(){
    Http.getCatData(this.data.offset).then(res=>{
      var playlists = res.data.playlists;
      this.setData({
        playlists
      })
    })
  },
  onReachBottom(){
     var offset = this.data.offset;
     offset+=35;
     Http.getCatData(offset).then(res=>{
       var {playlists} = res.data;
       this.setData({
         offset,
         playlists:this.data.playlists.concat(playlists)
       })
     })
  }
})