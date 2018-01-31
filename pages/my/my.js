// pages/my/my.js
//获取应用实例
var app = getApp()
Page({
    data: {
        moviesData: [],
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function () {
        wx.switchTab({
            url: '../my/my'
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            console.log(userInfo);
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
        app.getLocastroge();
    }
})