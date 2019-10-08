var beseUrl = "https://douban.uieee.com"
function http(url,data){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: beseUrl+url,
            data,
            header: {'content-type':'application/text'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            },
        });
    })
}
module.exports = http;