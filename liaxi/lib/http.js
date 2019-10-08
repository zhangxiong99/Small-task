var url ="https://douban.uieee.com/v2/movie/top250"
function http({type="get",callback,data={}}){
    $.ajax({
        url,
        data,
        dataType:"jsonp",
        success: res=>{
            callback(res)
            $(".loading").hide()
        },
        beforesend(){
            $(".loading").show()
        }
    })
}
function onReachBottom(){
    var scrollHeight = $(document).height();
    var scrollTop = Math.ceil($(document).scrollTop());
    var availHeight = $(window).height();
    return (scrollHeight == scrollTop+availHeight)?true:false;
}