const http = require('../../util/http')
Page({
  data: {
    songs: [],
  },
  onLoad: function (options) {
      let id = options.id;
        http(`/playlist/detail?id=${id}`).then(res=>{
            var tracks = res.data.playlist.tracks;
            var songs = []
            tracks.forEach(item=>{
              var obj = {};
              obj.title=item.name;
              obj.name = item.ar[0].name;
              obj.imgUrl = item.al.picUrl;
              obj.id = item.id;
              songs.push(obj);
        
            })
            this.setData({
              songs
            })
        })
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset
    var title = event.currentTarget.dataset.title
    var name = event.currentTarget.dataset.name
    let imgUrl = encodeURIComponent(event.currentTarget.dataset.imgurl)
    console.log(imgUrl)
    wx.navigateTo({
      url:'/pages/music/music?id='+id+'&title='+title+'&name='+name+'&imgUrl='+imgUrl
    })
  }
})