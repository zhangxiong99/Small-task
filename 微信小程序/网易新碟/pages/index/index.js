
const http = require('../../utils/http')
Page({
  data: {
    video:[],
    offset:0
  },
  onLoad: function (options) {
    http("/top/album?limit=20").then(res=>{
      var albums = res.data.albums;
      var video=[]
      albums.forEach(item=>{
        var obj = {}
        obj.pic = item.picUrl
        if(item.name.length>5){
          obj.name= item.name.slice(0,5)+"..."
        }else{
          obj.name= item.name
        }
        obj.artists = item.artists[0].name
        obj.id = item.id
        video.push(obj)
      })
      this.setData({
        video
      })
    })
  },
  onReachBottom(){
    var offset = this.data.offset;
    offset+=20;
    http(`/top/album?limit=20&offset=${offset}`).then(res=>{
      var albums = res.data.albums;
      var video=[]
      albums.forEach(item=>{
        var obj = {}
        obj.pic = item.picUrl
        if(item.name.length>5){
          obj.name= item.name.slice(0,5)+"..."
        }else{
          obj.name= item.name
        }
        obj.artists = item.artists[0].name
        obj.id = item.id
        video.push(obj)
      })
      this.setData({
        offset,
        video:this.data.video.concat(video)
      })
    })
  },
  handleClick(event){
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }
})