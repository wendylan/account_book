// pages/account/consumption/consumption.js

import Until from '../../../utils/util.js';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: Until.formatTime(new Date()).date,
        time: Until.formatTime(new Date()).time,
        account_type_arr: ['水果零食', '餐饮伙食', '出行旅游', '网上购物', '生活日常', '租房水电', '医疗药物', '其它消费'],
        account_type : 0,
        sum_value : '',
        remarks_value : '',
        oldStorageData : []
    },

    // 日期控制
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    // 时间控制
    bindTimeChange: function (e) {
        this.setData({
            time: e.detail.value
        })
    },

    // 消费类型
    bindCountChange: function(e){
        this.setData({
            account_type: e.detail.value
        })
    },

    // 金额
    bindCountValue: function(e){
        this.setData({
            sum_value: e.detail.value
        })
    },

    // 备注：
    bindRemarks: function (e) {
        this.setData({
            remarks_value: e.detail.value
        })
    },

    // 提交数据
    submitData : function(){
        if(!this.data.sum_value){
            this.showToast('请填写消费金额', 'loading');
            return;
        }
        if(isNaN(+this.data.sum_value)){
            this.showToast('消费金额错误', 'loading');
            return;
        }
        var bill = {
            _id: Date.parse(new Date()),
            sum_value: this.data.sum_value,
            date: this.data.date,
            time: this.data.time,
            remarks_value: this.data.remarks_value,
            account_type: this.data.account_type,
            billTypeNumber: this.billTypeNumber(this.data.account_type - 0),
            consumption_or_earn: 0
        };
        this.data.oldStorageData.push(bill);
        wx.setStorage({
            key: "bill_arr",
            data: this.data.oldStorageData
        });
        this.showToast('记账成功', 'success');
        this.resetValue();
    },

    // 消费类型转换英文
    billTypeNumber(account_type) {
        switch (account_type) {
            case 0:
                account_type = 'sgls';
                break;
            case 1:
                account_type = 'cyhs';
                break;
            case 2:
                account_type = 'cxly';
                break;
            case 3:
                account_type = 'wsgw';
                break;
            case 4:
                account_type = 'shrc';
                break;
            case 5:
                account_type = 'cfsd';
                break;
            case 6:
                account_type = 'ylyw';
                break;
            case 7:
                account_type = 'qt';
                break;
        }
        return account_type;
    },

    // 显示记账成功提示
    showToast(title, icon){
        wx.showToast({
            title: title,
            icon: icon,
            duration: 2000
        });
    },

    // 重置数据
    resetValue(){
        this.setData({
            sum_value: '',
            remarks_value: '',
            date: Until.formatTime(new Date()).date,
            time: Until.formatTime(new Date()).time
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        wx.getStorage({
            key: 'bill_arr',
            success: function (res) {
                _this.setData({
                    oldStorageData : res.data
                });
            }
        })
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