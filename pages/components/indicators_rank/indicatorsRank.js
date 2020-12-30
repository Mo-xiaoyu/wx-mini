// import * as echarts from "../../../ec-canvas/echarts"
// let chart = null;

// function initChart(canvas, width, height, dpr) {
//   chart = echarts.init(canvas, null, {
//     width: width,
//     height: height,
//     devicePixelRatio: dpr // new
//   });
//   canvas.setChart(chart);

//   var option = {
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//         type: "shadow",        // 默认为直线，可选为："line" | "shadow"
//         shadowStyle: {
//           color: 'rgba(0, 0, 0, 0.1)'
//         }
//       },
//       confine: true
//     },
//     grid: {
//       left: 20,
//       right: 20,
//       bottom: 15,
//       top: 10,
//       containLabel: true
//     },
//     xAxis: [
//       {
//         type: "value",
//         axisLine: {
//           lineStyle: {
//             color: "#999"
//           }
//         },
//         axisLabel: {
//           color: "#666"
//         }
//       }
//     ],
//     yAxis: [
//       {
//         type: "category",
//         axisTick: { show: false },
//         data: ["苏州市", "成都市", "天津市", "南京市", "武汉市", "杭州市", "广州市", "深圳市", "北京市", "上海市"],
//         axisLine: {
//           lineStyle: {
//             color: "#999"
//           }
//         },
//         axisLabel: {
//           color: "#666"
//         }
//       }
//     ],
//     series: [
//       {
//         name: "营商环境指数",
//         type: "bar",
//         label: {
//           normal: {
//             show: true,
//             position: "insideRight",
//             color: "#fff"
//           }
//         },
//         data: [84.29, 84.52, 86.71, 88.02, 89.97, 90.53, 93.83, 94.00, 94.68, 94.93],
//         barWidth: 15,
//         itemStyle: {
//           normal: {
//             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
//               '#2FAEF2', '#1CD8A8'
//           ].map((color, offset) => ({
//               color,
//               offset
//           })))
//           }
//         }
//       }
//     ]
//   };

//   chart.setOption(option);
//   return chart;
// }
import bars from "../../behaviors/bar"
Component({
  behaviors: [bars],
  properties: {

  },
  data: {
    // ec: {
    //   onInit: initChart
    // }
  },
  methods: {

  }
})
