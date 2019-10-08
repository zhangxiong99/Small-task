
const http = require('../../utils/http')
Page({
  data: {
   movies:[],
   start:0,
   total:""
  },
  onLoad: function(options) {
    http("/v2/movie/top250?count=30").then(res=>{
      var subjects = res.data.subjects;
      var total = res.data.total
      var movies = []
      subjects.forEach(item=>{
        var obj={};
        if(item.title.length>5){
          obj.title = item.title.slice(0,5)+"...";
        }else{
          obj.title = item.title;
        }
        obj.imgUrl = item.images.small;
        obj.id = item.id;
        movies.push(obj)
      })
      this.setData({
        movies,
        total
      })
    })
  },
  onReachBottom(){
    var start = this.data.start
    start+=30
    var total = this.data.total
    var movies = this.data.movies.length
    console.log(movies)
    if(movies<total){
       http(`/v2/movie/top250?count=30&start=${start}`).then(res=>{
      var subjects = res.data.subjects;
      var movies = []
      subjects.forEach(item=>{
        var obj={};
        if(item.title.length>5){
          obj.title = item.title.slice(0,5)+"...";
        }else{
          obj.title = item.title;
        }
        obj.imgUrl = item.images.small;
        obj.id = item.id;
        movies.push(obj)
      })
      this.setData({
        start,
        movies:this.data.movies.concat(movies)
      })
    })
    }else{
      wx.showToast({
        title:"一生",
        icon:"loading"
      })
    }
   
  },
  onPullDownRefresh(){
    console.log(1);
    var start = this.data.start
    start+=30
    http(`/v2/movie/top250?count=30&start=${start}`).then(res=>{
      var subjects = res.data.subjects;
      var movies = []
      subjects.forEach(item=>{
        var obj={};
        if(item.title.length>5){
          obj.title = item.title.slice(0,5)+"...";
        }else{
          obj.title = item.title;
        }
        obj.imgUrl = item.images.small;
        obj.id = item.id;
        movies.push(obj)
      })
      this.setData({
        start,
        movies:movies.concat(this.data.movies)
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