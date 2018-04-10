// import * as echarts from '../../ec-canvas/echarts';

// Page({
//   onShareAppMessage: function (res) {
//     return {
//       title: 'ECharts 可以在微信小程序中使用啦！',
//       path: '/pages/index/index',
//       success: function () { },
//       fail: function () { }
//     }
//   },
//   data: {
//     ecBar: {
//       onInit: function (canvas, width, height) {
//         const barChart = echarts.init(canvas, null, {
//           width: width,
//           height: height
//         });
//         canvas.setChart(barChart);

//         // 将 barChart 绑定到 this，以供其他函数访问
//         this.barChart = barChart;
//         barChart.setOption(getBarOption());

//         return barChart;
//       }
//     },

//     ecScatter: {
//       onInit: function (canvas, width, height) {
//         const scatterChart = echarts.init(canvas, null, {
//           width: width,
//           height: height
//         });
//         canvas.setChart(scatterChart);

//         this.scatterChart = scatterChart;
//         scatterChart.setOption(getScatterOption());

//         return scatterChart;
//       }
//     }
//   },

//   onReady() {
//   }
// });


// function getBarOption() {
//   return {
//     color: ['#37a2da', '#32c5e9', '#67e0e3'],
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//       }
//     },
//     legend: {
//       data: ['热度', '正面', '负面']
//     },
//     grid: {
//       left: 20,
//       right: 20,
//       bottom: 15,
//       top: 40,
//       containLabel: true
//     },
//     xAxis: [
//       {
//         type: 'value',
//         axisLine: {
//           lineStyle: {
//             color: '#999'
//           }
//         },
//         axisLabel: {
//           color: '#666'
//         }
//       }
//     ],
//     yAxis: [
//       {
//         type: 'category',
//         axisTick: { show: false },
//         data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
//         axisLine: {
//           lineStyle: {
//             color: '#999'
//           }
//         },
//         axisLabel: {
//           color: '#666'
//         }
//       }
//     ],
//     series: [
//       {
//         name: '热度',
//         type: 'bar',
//         label: {
//           normal: {
//             show: true,
//             position: 'inside'
//           }
//         },
//         data: [300, 270, 340, 344, 300, 320, 310]
//       },
//       {
//         name: '正面',
//         type: 'bar',
//         stack: '总量',
//         label: {
//           normal: {
//             show: true
//           }
//         },
//         data: [120, 102, 141, 174, 190, 250, 220]
//       },
//       {
//         name: '负面',
//         type: 'bar',
//         stack: '总量',
//         label: {
//           normal: {
//             show: true,
//             position: 'left'
//           }
//         },
//         data: [-20, -32, -21, -34, -90, -130, -110]
//       }
//     ]
//   };
// }

// function getScatterOption() {

//   var data = [];
//   var data2 = [];

//   for (var i = 0; i < 10; i++) {
//     data.push(
//       [
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 40)
//       ]
//     );
//     data2.push(
//       [
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100)
//       ]
//     );
//   }

//   var axisCommon = {
//     axisLabel: {
//       textStyle: {
//         color: '#C8C8C8'
//       }
//     },
//     axisTick: {
//       lineStyle: {
//         color: '#fff'
//       }
//     },
//     axisLine: {
//       lineStyle: {
//         color: '#C8C8C8'
//       }
//     },
//     splitLine: {
//       lineStyle: {
//         color: '#C8C8C8',
//         type: 'solid'
//       }
//     }
//   };

//   return {
//     color: ["#FF7070", "#60B6E3"],
//     backgroundColor: '#eee',
//     xAxis: axisCommon,
//     yAxis: axisCommon,
//     legend: {
//       data: ['aaaa', 'bbbb']
//     },
//     visualMap: {
//       show: false,
//       max: 100,
//       inRange: {
//         symbolSize: [20, 70]
//       }
//     },
//     series: [{
//       type: 'scatter',
//       name: 'aaaa',
//       data: data
//     },
//     {
//       name: 'bbbb',
//       type: 'scatter',
//       data: data2
//     }
//     ],
//     animationDelay: function (idx) {
//       return idx * 50;
//     },
//     animationEasing: 'elasticOut'
//   };
// }


import * as echarts from '../../ec-canvas/echarts';
console.log('2');
// console.log(this.data.earn_chart_data);
function initChartEarn(canvas, width, height) {
	const chart = echarts.init(canvas, null, {
		width: width,
		height: height
	});
	canvas.setChart(chart);

	var option = {
		backgroundColor: "#ffffff",
		color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
		// tooltip : {
		// trigger: 'item',
		// formatter: "{a} <br/>{b} : {c} ({d}%)"
		// },
		series: [{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: [0, '60%'],
			// data: [
			// 	{
			// 		value: 55,
			// 		name: '北京'
			// 	},
			// 	{
			// 		value: 20,
			// 		name: '武汉'
			// 	},
			// 	{
			// 		value: 10,
			// 		name: '杭州'
			// 	},
			// 	{
			// 		value: 20,
			// 		name: '广州'
			// 	},
			// 	{
			// 		value: 38,
			// 		name: '上海'
			// 	},
			// ],
            data: this.data.earn_chart_data,      
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 2, 2, 0.3)'
				}
			}
		}]
	};

	chart.setOption(option);
	return chart;
}

function initChartConsum(canvas, width, height) {
	const chart = echarts.init(canvas, null, {
		width: width,
		height: height
	});
	canvas.setChart(chart);

	var option = {
		backgroundColor: "#ffffff",
		color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
		// tooltip: {
		// 	trigger: 'item',
		// 	formatter: "{a} <br/>{b} : {c} ({d}%)"
		// },
		series: [{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: [0, '60%'],
			// data: [
			// 	{
			// 		value: 55,
			// 		name: '北京'
			// 	},
			// 	{
			// 		value: 20,
			// 		name: '武汉'
			// 	},
			// 	{
			// 		value: 10,
			// 		name: '杭州'
			// 	},
			// 	{
			// 		value: 20,
			// 		name: '广州'
			// 	},
			// 	{
			// 		value: 38,
			// 		name: '上海'
			// 	},
			// ],
            data: this.data.consumption_chart_data,      
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 2, 2, 0.3)'
				}
			}
		}]
	};

	chart.setOption(option);
	return chart;
}

Page({
	onShareAppMessage: function (res) {
		return {
			title: 'ECharts 可以在微信小程序中使用啦！',
			path: '/pages/index/index',
			success: function () { },
			fail: function () { }
		}
	},
	data: {
		ecEarn: {
			onInit: initChartEarn
		},
		ecConsum: {
			onInit: initChartConsum
		},
        bill_arr: [],
        // consumption_chart_arr: [0, 0, 0, 0, 0, 0, 0, 0],
        // earn_chart_arr: [0, 0, 0],
        consumption_chart_data : [],
        earn_chart_data : [],
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
                let temp = _this.changeDataFormat();
                _this.data.consumption_chart_data = temp.consum;
                _this.data.earn_chart_data = temp.earn;
                // _this.getChart('consumption-chart', _this.data.consumption_chart_data);
                // _this.getChart('earn-chart', _this.data.earn_chart_data);
            }
        });
    },

    // 修改数据格式
    changeDataFormat(){
        console.log(this.data.bill_arr);
        let allData = {};
        let earnArr = [];
        let consumArr = [];
        var consumption_chart_arr = [0, 0, 0, 0, 0, 0, 0, 0];
        var earn_chart_arr = [0, 0, 0];

        this.data.bill_arr.forEach((item, index) => {
            if (item.consumption_or_earn){
                if (item.account_type -0 == 0 ){
                    earn_chart_arr[0] = earn_chart_arr[0] + (+item.sum_value);
                }
                else if (item.account_type -0 == 1){
                    earn_chart_arr[1] = earn_chart_arr[1] + (+item.sum_value);
                }else{
                    earn_chart_arr[2] = earn_chart_arr[2] + (+item.sum_value);
                }
            }else{
                if (item.account_type -0 == 0){
                    consumption_chart_arr[0] = consumption_chart_arr[0] + (+item.sum_value);
                }
                else if (item.account_type -0 == 1){
                    consumption_chart_arr[1] = consumption_chart_arr[1] + (+item.sum_value);
                }
                else if (item.account_type -0 == 2) {
                    consumption_chart_arr[2] = consumption_chart_arr[2] + (+item.sum_value);
                }
                else if (item.account_type -0 == 3) {
                    consumption_chart_arr[3] = consumption_chart_arr[3] + (+item.sum_value);
                }
                else if (item.account_type -0 == 4) {
                    consumption_chart_arr[4] = consumption_chart_arr[4] + (+item.sum_value);
                }
                else if (item.account_type -0 == 5) {
                    consumption_chart_arr[5] = consumption_chart_arr[5] + (+item.sum_value);
                }
                else if (item.account_type -0 == 6) {
                    consumption_chart_arr[6] = consumption_chart_arr[6] + (+item.sum_value);
                }
                else{
                    consumption_chart_arr[7] = consumption_chart_arr[7] + (+item.sum_value);
                }
            }
        });
        let earnText = ["基本工资", "公司福利", "其它入账"];
        let consumText = ["水果零食", "餐饮伙食", "出行旅游", "网上购物", "生活日常", "租房水电", "医疗药物", "其它消费"];
        // let earnColor = ['#67C23A', '#E6A23C', '#F56C6C'];
        // let consumColor = ['#67C23A', '#E6A23C', '#F56C6C', '#3B58D9', '#9E3FC1', '#6C6868', '#22BCAD', '#BC3C22'];
        allData.earn = this.dataFormat(earnText, earn_chart_arr);
        allData.consum = this.dataFormat(consumText, consumption_chart_arr);
        return allData;
    },

    // 数据格式转换
    dataFormat(arr, dataArr){
        let data = [];
        for(let i = 0; i<arr.length; i++){
            data.push({ 'name' : arr[i], 'data' : dataArr[i] });
        }
        return data;
    },

	onReady() {
	},

    /**
    * 生命周期函数--监听页面显示
    */
    onShow: function () {
        this.getStorageData();
    },

});


    