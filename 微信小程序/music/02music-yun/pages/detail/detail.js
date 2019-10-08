const http = require('../../util/http');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musics:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var res = await http.getSearch({
      keywords: "你的名字"
    });
    this.handleData(res)
  },
  handleData :async function(res) {
    var songs = res.data.result.songs;
    var musics = []
    songs.forEach(async item => {
      var obj = {};
      obj.name = item.name;
      obj.id = item.id;
      var data = await http.getDetail(item.id)
      obj.picUrl =data.data.songs[0].al.picUrl;
      obj.artistName = item.artists[0].name;
      obj.time = item.duration;
      obj.musicUrl = `https://music.163.com/song/media/outer/url?id=${item.id}`
      musics.push(obj)
    })
    this.setData({
      musics
    })
  }
})