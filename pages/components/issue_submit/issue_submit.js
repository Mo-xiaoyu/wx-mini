Page({
  data: {
    showName: false,
    username: "",
    phone: "",
    companyName: "",
    credit_code: "",
    comOrPer: "com",
    type: "acc",
    title: "",
    date: "",
    region: ["北京市", "北京市", "东城区"],
    content: "",
    loading: false,
    imgs: [
      "http://inews.gtimg.com/newsapp_bt/0/1693121381/641",
      "https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg",
      "https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg",
    ], //本地图片地址数组
  },
  onLoad: function (options) {
    this.setData({
      date: this.getNowDate()
    });
  },
  getNowDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year+"-"+month+"-"+day;
  },
  handle(e) {
    console.log(e)
    const {
      index
    } = e.currentTarget.dataset;
    let imgs = this.data.imgs;
    wx.previewImage({
      current: imgs[index],
      urls: imgs,
    })
  },
  deleteImg(e) {
    console.log(e)
    const {
      index
    } = e.currentTarget.dataset;
    this.data.imgs.splice(index, 1);
    this.setData({
      imgs: this.data.imgs
    })
  },
  submit(e) {
    console.log(e)
    this.setData({
      loading: true
    })
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 3000)
  },
  reset(e) {
    console.log(e)
    this.setData({
      username: "",
      phone: "",
      comOrPer: "com",
      type: "acc",
      region: [],
      customItem: "全部",
      title: "",
      content: "",
      imgs: [],
      loading: false
    });
  },
  bindRadioChange(e) {
    this.setData({
      showName: e.detail.value
    });
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    });

  },
  chooseImageTap() {
    let that = this;
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        let tempImgs = res.tempFilePaths;
        let imgs = that.data.imgs;
        for (let i = 0; i < tempImgs.length; i++) {
          if (imgs.length >= 5) {
            that.setData({
              imgs
            });
            return false;
          } else {
            imgs.push(tempImgs[i]);
          }
        }
        console.log(imgs)
        that.setData({
          imgs
        })
      }
    })
    console.log(this.data)
  }

})