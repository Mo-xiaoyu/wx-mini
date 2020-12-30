// import * as echarts from "../../../ec-canvas/echarts";
// import geoJson from "../../../libs/mapData";
import maps from "../../behaviors/map";
Component({
  behaviors: [maps],
  properties: {
    
  },
  data: {
    // ec: {
    //   // onInit: initChart
    //   lazyLoad: true
    // },
    // showData: []
  },
  lifetimes: {
    attached() {
      // setTimeout(() => {
      //   this.setData({
      //     showData: [ //这里一般是后台返回数据
      //       { name: '广东省', value: 10 },
      //       { name: '山东省', value: 20 },
      //       { name: '江苏省', value: 30 },
      //       { name: '河南省', value: 40 },
      //       { name: '北京市', value: 38 },
      //       { name: '上海市', value: 41 },
      //       { name: '河北省', value: 15 },
      //       { name: '浙江省', value: 25 }
      //     ]
      //   })
      // });
    },
    created() {
      // this.echartsComponnet = this.selectComponent('#mychart-dom-area');//一定要初始化
      // this.init_echarts(); //初始化图表
    }
  },
  methods: {
    // init_echarts() {
    //   this.echartsComponnet.init((canvas, width, height, dpr) => {
    //     // 初始化图表
    //     const chart = echarts.init(canvas, null, {
    //       width: width,
    //       height: height,
    //       devicePixelRatio: dpr // new
    //     });
    //     echarts.registerMap('china', geoJson);
    //     chart.setOption(this.getOption());
    //     // 注意这里一定要返回 chart 实例，否则会影响事件处理等
    //     return chart;
    //   });
    // },
    // getOption() {
    //   const option = {
    //     // title: {
    //     //   text: '舆情展示',
    //     //   left: 'center'
    //     // },
    //     tooltip: {
    //       trigger: 'item',
    //       // formatter: '{b}: {c}'
    //       formatter: function (data) {
    //         if (!isNaN(data.value)) {
    //           return data.name + "：" + data.value;
    //         } else {
    //           return data.name + "：" + 0;
    //         }
    //       }
    //     },
    //     visualMap: {
    //       //方案1
    //       // type: "continuous",
    //       // min: 0,
    //       // max: 100,
    //       // text: ['High', 'Low'],
    //       // left: "5%",
    //       // bottom: "5%",
    //       // realtime: false,
    //       // calculable: true,
    //       // inRange: {
    //       //   color: ['yellow', 'orangered']
    //       // },
    
    //       //方案2
    //       // type: "piecewise",
    //       // min: 0,
    //       // max: 100,
    //       // text: ['High', 'Low'],
    //       // left: "5%",
    //       // bottom: "5%",
    //       // realtime: false,
    //       // calculable: true,
    //       // inRange: {
    //       //   color: ['yellow', 'orangered']
    //       // },
    
    //       //方案3
    //       type: "piecewise",
    //       left: "5%",
    //       bottom: "5%",
    //       pieces: [
    //         { min: 40, max: 50 },
    //         { min: 30, max: 40 },
    //         { min: 20, max: 30, label: '10 到 200（自定义label）' },
    //         { min: 10, max: 20, label: '123（自定义特殊颜色）' },
    //         { min: 0, max: 10 }
    //       ],
    //       color: ['orangered', 'yellow'],
    //     },
    //     toolbox: {
    //       feature: {
    //         myFull: {
    //           show: true,
    //           icon: 'path://M832 792.48V672a32 32 0 0 1 64 0v192a32 32 0 0 1-32.16 32H672a32 32 0 0 1 0-64h108.16l-161.472-144.32A32 32 0 1 1 661.312 640L832 792.448zM128 864v-192a32 32 0 0 1 64 0v120.48L362.688 640a32 32 0 1 1 42.624 47.744L243.84 832H352a32 32 0 0 1 0 64H160a32 32 0 0 1-32-32zM192 231.52V352a32 32 0 0 1-64 0V160a32 32 0 0 1 32.16-32H352a32 32 0 0 1 0 64H243.84l161.472 144.32A32 32 0 1 1 362.688 384L192 231.552zM896 160v192a32 32 0 0 1-64 0V231.52L661.312 384a32 32 0 1 1-42.624-47.744L780.16 192H672a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32z',
    //           title: " ",
    //           onclick:function(e) {
    //             wx.navigateTo({
    //               url: '/pages/logs/logs',
    //             })
    //           }
    //         }
    //       }
    //     },
    //     series: [{
    //       type: 'map',
    //       mapType: 'china',
    //       roam: true,
    //       zoom: 1,
    //       label: {
    //         normal: {
    //           show: false //在省市区是否显示省市区名称
    //         },
    //         emphasis: {
    //           textStyle: {
    //             color: '#333'
    //           }
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           areaColor: '#f1f1f1',
    //           borderColor: '#195BB9'
    //         },
    //         emphasis: {
    //           areaColor: '#2B91B7',
    //           // areaColor: '#389BB7',
    //           borderWidth: 0
    //         }
    //       },
    //       animation: false,
    //       data: this.data.showData
    //     }],
    //   };
    //   return option;
    // }
  }
})
