## 一、小程序目录结构

```
app.js 
app.json   //小程序公共配置
pages 
	index
		index.js
		index.wxml - html
		index.wxss  -css
		index.json 
```



## 二、语法起步

```
//index.js
Page({
    data:{
        msg:"hello world"
    }
})
```

```
//index.wxml
<view>{{msg}}</view>
```

### 2-1 事件

```
//1.点击事件 onclick bind:tap
<view bind:tap="handleClick">{{msg}}</view>

Page({
    ...
    handleClick(){
        this.setData({
            msg:"change"
        })
    }
})
```

### 2-2 input

```
<input type="text" focus="{{isFocus}} confirm-type="search"/>
//focus 自动聚焦，拉起键盘
```

```
//bind:confirm 点击完成按钮时触发
//bind:input 键盘输入时触发
```

### 2-3 form

```
<form  bind:submit="handleSubmit" >
   <input type="text" name="keyword" placeholder="请搜索"/>
   <button form-type="submit">搜索</button>
</form>
```



```
Page({
    handleSubmit(event){
        console.log(event.detail.value)
    }
})
```

### 2-4 wx:for

```
//index.js
Page({
    data:{
        arr:['html','css','javascript']
    }
})
```

```
<view wx:for="{{arr}}" wx:key="{{item}}">{{item}}</view>
```

### 2-5 三目运算

```
<image bind:tap="handleMusic" src="{{isPlay?'/images/play.png':'/images/pause.png'}}"></image>
```

```
Page({
    data:{
        isPlay:false
    },
    handleMusic(){
        this.setData({
            isPlay:!this.data.isPlay
        })
    }
})
```

### 2-6 wx:if

```
//控制元素隐藏或显示
```

## 三、生命周期

> 页面初始化时会触发三个生命周期函数

```
  /*
   生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /*
    生命周期函数--监听页面显示
   */
  onShow: function () {

  },
   /*
   生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
```

## 四、网络请求

```
var reqTask = wx.request({
      url: 'http://192.168.14.49:3000/search?keywords=你',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      success: (result)=>{
          console.log(result)
      }
    });
```

```
mvvm
m --http请求来的数据
v --view渲染到视图上
vm  viewModel--视图数据对象
```

## 五、模块化

```
//导出
var a = 10;
module.exports ={
    a
}
//导入
var http= require('../../models/http.js');
console.log(http.a)
```

