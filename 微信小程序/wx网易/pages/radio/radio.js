Page({
  data: {
    radios:[]
  },
  onShow(){
    wx.request({
      url: 'https://music.aityp.com/program/recommend?limit=30',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        var programs =res.data.programs;
        var radios = []
        programs.forEach(item=>{
          var obj = {};
          obj.imgUrl=item.coverUrl;
          obj.name = item.mainSong.name;
          obj.title=item.radio.name;
          obj.listenerCount=item.listenerCount;
          obj.likedCount=item.likedCount;
          obj.category=item.radio.category;
          radios.push(obj)
        })
        this.setData({
          radios
        })
      },
    });
  }
})
