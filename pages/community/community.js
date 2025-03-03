Page({
  data: {
    // 服务分类
    serviceCategories: [
      {
        id: 1,
        name: '预约挂号',
        icon: '/assets/icons/appointment.png',
        path: '/pages/appointment/appointment'
      },
      {
        id: 2,
        name: '在线问诊',
        icon: '/assets/icons/online-consultation.png',
        path: '/pages/consultation/consultation'
      },
      {
        id: 3,
        name: '药品配送',
        icon: '/assets/icons/medicine-delivery.png',
        path: '/pages/medicine/medicine'
      },
      {
        id: 4,
        name: '健康档案',
        icon: '/assets/icons/health-record.png',
        path: '/pages/health-record/health-record'
      }
    ],
    // 近期预约
    recentAppointments: [],
    // 服务通知
    notifications: []
  },

  onLoad: function() {
    this.initPageData();
  },

  initPageData: function() {
    // 模拟获取近期预约数据
    this.setData({
      recentAppointments: [
        {
          id: 1,
          type: '专家门诊',
          doctor: '张医生',
          department: '内科',
          date: '2024-01-25',
          time: '09:30'
        }
      ],
      notifications: [
        {
          id: 1,
          title: '预约提醒',
          content: '您有一个明天上午9:30的内科预约',
          time: '2024-01-24 15:00'
        },
        {
          id: 2,
          title: '取药提醒',
          content: '您的药品已准备就绪，请及时取药',
          time: '2024-01-24 14:30'
        }
      ]
    });
  },

  // 跳转到服务详情页
  navigateToService: function(e) {
    const path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path
    });
  }
})