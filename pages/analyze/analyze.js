// pages/analyze/analyze.js
// var Chart = require('../../utils/Chart.min.js');
var wxCharts = require('../../utils/wxcharts.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bill_arr: [],
        consumption_chart_arr: [0, 0, 0, 0, 0, 0, 0, 0],
        earn_chart_arr: [0, 0, 0]
    },

    // 获取key为“bill_arr”的数据
    getStorageData() {
        var _this = this;
        wx.getStorage({
            key: 'bill_arr',
            success: function (res) {
                _this.setData({
                    bill_arr: res.data
                });
            }
        });
    },
    // 转换数值
    fetchBillData() {
        this.data.bill_arr.forEach((item, index) => {
            if (item.account_type[0] == '水果零食')
                this.consumption_chart_arr[0] = this.consumption_chart_arr[0] + (+item.sum_value);
            else if (item.account_type[0] == '餐饮伙食')
                this.consumption_chart_arr[1] = this.consumption_chart_arr[1] + (+item.sum_value);
            else if (item.account_type[0] == '出行旅游')
                this.consumption_chart_arr[2] = this.consumption_chart_arr[2] + (+item.sum_value);
            else if (item.account_type[0] == '网上购物')
                this.consumption_chart_arr[3] = this.consumption_chart_arr[3] + (+item.sum_value);
            else if (item.account_type[0] == '生活日常')
                this.consumption_chart_arr[4] = this.consumption_chart_arr[4] + (+item.sum_value);
            else if (item.account_type[0] == '租房水电')
                this.consumption_chart_arr[5] = this.consumption_chart_arr[5] + (+item.sum_value);
            else if (item.account_type[0] == '医疗药物')
                this.consumption_chart_arr[6] = this.consumption_chart_arr[6] + (+item.sum_value);
            else if (item.account_type[0] == '其它消费')
                this.consumption_chart_arr[7] = this.consumption_chart_arr[7] + (+item.sum_value);
            else if (item.account_type[0] == '基本工资')
                this.earn_chart_arr[0] = this.earn_chart_arr[0] + (+item.sum_value);
            else if (item.account_type[0] == '公司福利')
                this.earn_chart_arr[1] = this.earn_chart_arr[1] + (+item.sum_value);
            else if (item.account_type[0] == '其它入账')
                this.earn_chart_arr[2] = this.earn_chart_arr[2] + (+item.sum_value);
        });
    },

    changeData(){
        var consumption_data = {
            labels: [
                "水果零食",
                "餐饮伙食",
                "出行旅游",
                "网上购物",
                "生活日常",
                "租房水电",
                "医疗药物",
                "其它消费",
            ],
            datasets: [{
                data: this.consumption_chart_arr,
                backgroundColor: [
                    "#999933",
                    "#FF9933",
                    "#FF6666",
                    "#36A2EB",
                    "#666699",
                    "#CCFF00",
                    "#66CCCC",
                    "#663366"
                ]
            }]
        };
        var earn_data = {
            labels: [
                "基本工资",
                "公司福利",
                "其它入账"
            ],
            datasets: [{
                data: this.earn_chart_arr,
                backgroundColor: [
                    "#13CE66",
                    "#F7BA2A",
                    "#FF4949"
                ]
            }]
        };
        // var consumption_ctx = document.getElementById("consumption-chart").getContext("2d");
        // var consumption_ctx = wx.createCanvasContext('consumption-chart');
        // var earn_ctx = document.getElementById("earn-chart").getContext("2d");
        // var earn_ctx = wx.createCanvasContext('earn-chart');
        new Chart('consumption-chart', {
            type: 'pie',
            data: consumption_data
        });
        new Chart('earn-chart', {
            type: 'pie',
            data: earn_data
        });
    },

    getChart(str){
        new wxCharts({
            canvasId: str,
            type: 'pie',
            series: [{
                name: 'cat1',
                data: 50,
            }, {
                name: 'cat2',
                data: 30,
            }, {
                name: 'cat3',
                data: 1,
            }, {
                name: 'cat4',
                data: 1,
            }, {
                name: 'cat5',
                data: 46,
            }],
            width: 350,
            height: 220,
            dataLabel: true
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.getStorageData();
        this.getChart('consumption-chart');
        this.getChart('earn-chart');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})