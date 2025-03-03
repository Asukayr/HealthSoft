Page({
  data: {
    // 用户信息
    userInfo: {
      isLogin: false,
      username: '未登录',
      userId: '点击登录/注册',
      avatar: '/assets/icons/default-avatar.png'
    },
    // 健康统计
    healthStats: {
      monitorDays: 0,
      standardDays: 0,
      standardRate: '0%'
    },
    // 健康档案
    healthArchives: [
      {
        id: 1,
        name: '既往病史',
        icon: '/assets/icons/medical-history.png',
        count: 0
      },
      {
        id: 2,
        name: '家族病史',
        icon: '/assets/icons/family-history.png',
        count: 0
      },
      {
        id: 3,
        name: '过敏史',
        icon: '/assets/icons/allergy.png',
        count: 0
      },
      {
        id: 4,
        name: '用药记录',
        icon: '/assets/icons/medication.png',
        count: 0
      }
    ],
    // 功能列表
    functionList: [
      {
        id: 1,
        name: '我的报告',
        icon: '/assets/icons/report.png',
        url: '/pages/profile/report/report'
      },
      {
        id: 2,
        name: '我的预约',
        icon: '/assets/icons/appointment.png',
        url: '/pages/profile/appointment/appointment'
      },
      {
        id: 3,
        name: '咨询记录',
        icon: '/assets/icons/consultation.png',
        url: '/pages/profile/consultation/consultation'
      },
      {
        id: 4,
        name: '健康提醒',
        icon: '/assets/icons/reminder.png',
        url: '/pages/profile/reminder/reminder'
      }
    ],
    // 设置列表
    settingsList: [
      {
        id: 1,
        name: '通用设置',
        icon: '/assets/icons/settings.png',
        url: '/pages/profile/settings/general'
      },
      {
        id: 2,
        name: '隐私设置',
        icon: '/assets/icons/privacy.png',
        url: '/pages/profile/settings/privacy'
      },
      {
        id: 3,
        name: '关于我们',
        icon: '/assets/icons/about.png',
        url: '/pages/profile/about/about'
      }
    ]
  },

  onLoad: function() {
    // 页面加载时初始化数据
    this.initUserInfo();
    this.initHealthStats();
  },

  // 初始化用户信息
  initUserInfo: function() {
    // 这里可以添加从本地存储或服务器获取用户信息的逻辑
    // 目前使用模拟数据
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        'userInfo.isLogin': true,
        'userInfo.username': userInfo.nickName || '用户',
        'userInfo.userId': userInfo.userId || 'ID: 12345678',
        'userInfo.avatar': userInfo.avatarUrl || '/assets/icons/default-avatar.png'
      });
    }
  },

  // 初始化健康统计数据
  initHealthStats: function() {
    // 这里可以添加从服务器获取健康统计数据的逻辑
    // 目前使用模拟数据
    const healthStats = wx.getStorageSync('healthStats');
    if (healthStats) {
      this.setData({
        healthStats
      });
    }
  },

  // 点击用户信息区域
  tapUserInfo: function() {
    if (!this.data.userInfo.isLogin) {
      // 未登录状态，跳转到登录页面
      wx.showToast({
        title: '请实现登录功能',
        icon: 'none'
      });
    } else {
      // 已登录状态，跳转到用户详情页面
      wx.showToast({
        title: '用户详情页面待开发',
        icon: 'none'
      });
    }
  },

  // 查看完整健康档案
  viewFullArchive: function() {
    wx.showToast({
      title: '健康档案页面待开发',
      icon: 'none'
    });
  },

  // 点击健康档案项
  tapArchiveItem: function(e) {
    const id = e.currentTarget.dataset.id;
    const archive = this.data.healthArchives.find(item => item.id === id);
    if (archive) {
      wx.showToast({
        title: archive.name + '页面待开发',
        icon: 'none'
      });
    }
  },

  // 点击功能项
  tapFunctionItem: function(e) {
    const id = e.currentTarget.dataset.id;
    const func = this.data.functionList.find(item => item.id === id);
    if (func) {
      wx.showToast({
        title: func.name + '页面待开发',
        icon: 'none'
      });
    }
  },

  // 点击设置项
  tapSettingsItem: function(e) {
    const id = e.currentTarget.dataset.id;
    const setting = this.data.settingsList.find(item => item.id === id);
    if (setting) {
      wx.showToast({
        title: setting.name + '页面待开发',
        icon: 'none'
      });
    }
  }
})