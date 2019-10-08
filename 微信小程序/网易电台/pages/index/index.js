
const http = require('../../utils/http')
Page({
  data: {
    radios: [],
    offset:0
  },
  onLoad: function (options) {
    http("/program/recommend?limit=20").then(res => {
      var programs = res.data.programs;
      var radios = []
      programs.forEach(item => {
        var obj = {};
        obj.imgurl = item.coverUrl;
        obj.name = item.mainSong.name;
        obj.title = item.radio.name;
        obj.listenerCount = item.listenerCount;
        obj.likedCount = item.likedCount;
        obj.category = item.radio.category;
        obj.id = item.mainTrackId;
        obj.blururl = item.blurCoverUrl;
        obj.picurl = item.radio.picUrl;
        obj.subcount = item.radio.subCount
        radios.push(obj)
      })
      this.setData({
        radios
      })
    })
  },
  onReachBottom(){
    var offset = this.data.offset;
    offset+=20;
    http(`/program/recommend?limit=20&offset=${offset}`).then(res => {
      var programs = res.data.programs;
      var radios = []
      programs.forEach(item => {
        var obj = {};
        obj.imgurl = item.coverUrl;
        obj.name = item.mainSong.name;
        obj.title = item.radio.name;
        obj.listenerCount = item.listenerCount;
        obj.likedCount = item.likedCount;
        obj.category = item.radio.category;
        obj.id = item.mainTrackId;
        obj.blururl = item.blurCoverUrl;
        obj.picurl = item.radio.picUrl;
        obj.subcount = item.radio.subCount
        radios.push(obj)
      })
      this.setData({
        offset,
        radios:this.data.radios.concat(radios)
      })
    })
  },
  handleClick(event){
    var id = event.currentTarget.dataset.id
    var name = event.currentTarget.dataset.name
    var title = event.currentTarget.dataset.title
    var subcount = event.currentTarget.dataset.subcount
    var imgurl = escape(event.currentTarget.dataset.imgurl)
    var blururl = escape(event.currentTarget.dataset.blururl)
    var picurl = escape(event.currentTarget.dataset.picurl)
    wx.navigateTo({
      url: '/pages/radio/radio?id='+id+'&name='+name+'&title='+title+
      '&subcount='+subcount+'&imgurl='+imgurl+'&blururl='+blururl+'&picurl='+picurl,
    })
  }
})
