const http = require('../../utils/http')
Page({
    data: {
        detail:[],
      },
      onLoad: function (options) {
        let id = options.id;
        http(`/v2/movie/subject/${id}`).then(res=>{
          var detail = [];
          var movie = res.data
          var obj = {};
          obj.summary = movie.summary;
          obj.imgUrl = movie.images.small
          detail.push(obj)
          this.setData({
            detail
          })
        })
      },
})