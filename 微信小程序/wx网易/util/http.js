var baseUrl = "https://music.aityp.com"
function http(url){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl+url,
            header: {'content-type':'application/json'},
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
