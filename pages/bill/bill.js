    // pages/bill/bill.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bill_arr : [],
        earn_sum : 0,
        consum_sum : 0
    },
    delOne: function(e){
        let _this = this;
        wx.showModal({
            title: '删除',
            content: '确定删除吗？删除后数据无法恢复',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                    let index = e.currentTarget.dataset.index;
                    _this.data.bill_arr.splice(index, 1);
                    wx.setStorage({
                        key: "bill_arr",
                        data: _this.data.bill_arr
                    });
                    _this.showToast();
                    _this.getStorageData();
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        });
    },

    // 显示删除成功提示
    showToast() {
        wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
        });
    },

    // 获取key为“bill_arr”的数据
    getStorageData(){
        var _this = this;
        wx.getStorage({
            key: 'bill_arr',
            success: function (res) {
                let result = _this.getEarnAndConsum(res.data);
                console.log(result);
                _this.setData({
                    bill_arr: res.data,
                    earn_sum: result.earn,
                    consum_sum: result.consum
                });
            }
        });
    },
    
    // 求花费和入账的分别和
    getEarnAndConsum(data){
        let result = {};
        let earn = [];
        let consum = [];
        for(let item of data){
            if(item.consumption_or_earn){
                earn.push(item);
            }else{
                consum.push(item);
            }
        }
        result.earn = this.getSum(earn);
        result.consum = this.getSum(consum);
        return result;
    },

    // 求和
    getSum(data){
        let sum = 0;
        for(let item of data){
            sum +=item.sum_value - 0;
        }
        return sum;
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