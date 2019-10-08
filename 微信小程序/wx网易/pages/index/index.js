const http = require('../../util/http')
Page({
  data: {
   musics:[],
  },
  onLoad: function (options){
    http("/top/playlist?cat=华语").then(res=>{
      var playlists= res.data.playlists;
        var musics= []
        playlists.forEach(item=>{
          var obj={};
          obj.imgUrl = item.coverImgUrl;
          obj.name = item.name;
          obj.author = item.creator.nickname;
          obj.id = item.id;
          musics.push(obj)
        })
        this.setData({
          musics
        })
    })
    // wx.request({
    //   url: 'https://music.aityp.com/top/playlist?cat=%E5%8D%8E%E8%AF%AD',
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (res)=>{
    //     var playlists= res.data.playlists;
    //     var musics= []
    //     playlists.forEach(item=>{
    //       var obj={};
    //       obj.imgUrl = item.coverImgUrl;
    //       obj.name = item.name;
    //       obj.author = item.creator.nickname;
    //       musics.push(obj)
    //       console.log(obj)
    //     })
    //     this.setData({
    //       musics
    //     })
    //   },
    // });
  },
  handleClick(event){
    var {id} = event.currentTarget.dataset
    wx.navigateTo({
      url:'/pages/songs/songs?id='+id,
    })
  }
})
