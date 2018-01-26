//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        moviesData : [],
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function() {
        wx.switchTab({
            url: '../my/my'
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                userInfo:userInfo
            })
        })
        app.getLocastroge();
        // wx.request({
        //     url: 'https://api.douban.com/v2/movie/coming_soon', //仅为示例，并非真实的接口地址
        //     header: {
        //         'content-type': 'application/json' // 默认值
        //     },
        //     success: function (res) {
        //         console.log(res.data)
        //     }
        // })
    },
    
    // 消费
    gotoComsumption: function(e) {
        wx.navigateTo({
            url: '../account/consumption/consumption'
        })
    },

    // 入账
    gotoEarn: function (e) {
        wx.navigateTo({
            url: '../account/earn/earn'
        })
    },
})
