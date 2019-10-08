
const http = require('../../utils/http')
Page({
  data: {
   Book:[],
   start:0,
   keyword:""
  },
  onLoad: function (options) {

  },
  handleSubmit(event){
    var keyword = event.detail.value.keyword;
    this.setData({
      keyword
    })
    http(`/v2/book/search?q=${keyword}`).then(res=>{
      var books = res.data.books;
      var Book = []
      books.forEach(item=>{
        var obj = {};
        obj.imgUrl = item.images.small;
        obj.title = item.title;
        obj.average = item.rating.average;
        obj.num = item.rating.numRaters;
        obj.author = item.author;
        obj.publisher = item.publisher;
        obj.id = item.id
        Book.push(obj)
      })
      this.setData({
        Book
      })
    })
  },
  onReachBottom(){
    var start = this.data.start
    var keyword = this.data.keyword
    start+=20
    http(`/v2/book/search?q=${keyword}&start=${start}`).then(res=>{
      var books = res.data.books;
      var Book = []
      books.forEach(item=>{
        var obj = {};
        obj.imgUrl = item.images.small;
        obj.title = item.title;
        obj.average = item.rating.average;
        obj.num = item.rating.numRaters;
        obj.author = item.author;
        obj.publisher = item.publisher;
        obj.id = item.id
        Book.push(obj)
      })
      this.setData({
        start,
        Book:this.data.Book.concat(Book)
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

