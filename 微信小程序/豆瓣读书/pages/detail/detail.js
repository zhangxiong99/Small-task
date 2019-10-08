
const http = require('../../utils/http') 
Page({
  data: {
    detail:[]
  },
  onLoad: function (options) {
    let id = options.id;
    http(`/v2/book/${id}`).then(res=>{
      var detail= [];
      var item = res.data
      var obj = {};
      obj.title = item.title;
      obj.imgUrl = item.images.small;
      obj.author = item.author[0];
      obj.publisher = item.publisher;
      obj.pubdate = item.pubdate;
      obj.pages = item.pages;
      obj.price = item.price;
      obj.summary = item.summary;
      detail.push(obj)
      this.setData({
        detail
      })
    })
  }
})