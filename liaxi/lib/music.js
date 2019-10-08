var url ="https://music.aityp.com/program/recommend?limit=30 "
function http({type="get",callback}){
    $.ajax({
        url,
        type,
        dataType:"json",
        success: res=> {
            callback(res)
            $(".loading").hide()
        },
        beforesend(){
            $(".loading").show()
        }
    })
}


