// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    list:[
      {
        list_tool:[
          {
            img:"../../images/test/00.png",
            name:"朋友圈",
            url:"../moments/moments"
          }]
      },
      {
        list_tool:[
          {
            img:"../../images/test/01.png",
            name:"扫一扫"
          },
          {
            img:"../../images/test/02.png",
            name:"摇一摇"
          },
          {
            img: "../../images/test/09.png",
            name: "扫一扫"
          }]
      },
      {
        list_tool:[
                    // {
                    //     img:"/image/newFriend.png",
                    //     name:"附近的人"
                    // },
          {
            img:"../../images/test/07.png",
            name:"漂流瓶"
                    }
                ]
            },
            {
                list_tool:[
                    {
                    img:"../../images/test/06.png",
                        name:"购物"
                    },
                    {
                      img:"../../images/test/02.png",
                        name:"游戏"
                    }
                ]
            },
        ]

  },
  /**
   * 搜索栏
   * */
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  /**
   * 导航栏页面导航
   * */ 
  switchTab_lost: function () {
    wx.switchTab({
      url: '../lost/lost',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  switchTab_my: function () {
    wx.switchTab({
      url: '../my/my',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  redirect_post: function () {
    wx.navigateTo({
      url: '../post/post',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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
