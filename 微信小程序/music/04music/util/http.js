var baseUrl = "https://music.aityp.com/"

function http({
    url,
    data,
    success
}) {
    wx.request({
        url: baseUrl + url,
        data: {},
        header: {
            'content-type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res) => {
            if (res.statusCode == 200) {
                success(res)
                wx.hideLoading();
            }else{
                wx.showToast({
                    title: '请求的资源不存在',
                    icon: 'none',
                    duration: 2000,
                });
                wx.hideLoading();
            }

        },
        fail:err=>{
            wx.showToast({
                title: '网络异常',
                icon: 'none',
                duration: 2000,
            });
            wx.hideLoading();
        }
    });
}
// module.exports = http;
module.exports = {
    getMvData: (callback) => {
        http({
            url: 'mv/first',
            success: res => {
                callback(res)
            }
        })
    },
    getMvUrl: (id, callback) => {
        http({
            url: `mv/url?id=${id}`,
            success: res => {
                callback(res)
            }
        })
    }
}