// pages/indicators_list/indicators_list.js
Page({
  data: {
    tabs: [
      {
        id: 0,
        title: "全国",
        isActive: true
      },
      {
        id: 1,
        title: "省排名",
        isActive: false
      },
      {
        id: 2,
        title: "市排名",
        isActive: false
      },
      {
        id: 3,
        title: "园区排名",
        isActive: false
      },
    ]
  },
  onLoad: function (options) {

  },
  modify(e) {
    console.log(e)
    let {index} = e.detail;
    let {tabs} = this.data;
    tabs.forEach((v,i) => index===i?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    });
  }
})