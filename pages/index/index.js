Page({
  data: {
    newsList: [{
        title: "实施招商引资项目受阻",
        time: "2020-10-30"
      },
      {
        title: "过重处罚企业",
        time: "2020-10-30"
      },
      {
        title: "阳光城檀悦豆腐渣工程",
        time: "2020-10-30"
      },
      {
        title: "未经业主同意私自将真石漆改为质感漆 屋内墙体用手都能掰掉",
        time: "2020-10-30"
      },
      {
        title: "便民服务费用高离谱",
        time: "2020-10-30"
      },
      {
        title: "街道坑太多，影响出行1",
        time: "2020-10-30"
      }
    ],
    src: ''
  },
  onLoad: function (options) {

  },
  catchMove(e) {
    return false;
  },
  createIssue() {
    wx.navigateTo({
      url: '/pages/components/issue_submit/issue_submit',
    })
  },
  onShareAppMessage() {

  },
  //选择视频
  chooseVideo: function () {
    console.log('res: ');
    var that = this
    wx.chooseVideo({
      success: function (res) {
        console.log('res: ', res);
        that.setData({
          src: res.tempFilePath,
        })
      }
    })
  }
})