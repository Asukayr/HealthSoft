Page({
  data: {
    // 健康数据
    healthData: {
      bloodPressure: {
        systolic: 120,
        diastolic: 80,
        date: '2024-01-20'
      },
      bloodSugar: {
        value: 5.6,
        date: '2024-01-20'
      },
      weight: {
        value: 65,
        date: '2024-01-20'
      }
    },
    // 健康目标
    healthGoals: [
      {
        type: 'bloodPressure',
        target: '收缩压≤130，舒张压≤80',
        status: 'normal'
      },
      {
        type: 'bloodSugar',
        target: '空腹血糖≤6.1',
        status: 'normal'
      }
    ],
    // 健康建议
    healthAdvice: [
      {
        title: '血压管理建议',
        content: '保持规律作息，适量运动，控制饮食盐分'
      },
      {
        title: '血糖管理建议',
        content: '控制碳水摄入，规律监测血糖，保持运动习惯'
      }
    ]
  },

  onLoad: function() {
    // 页面加载时初始化数据
    this.initPageData();
  },

  initPageData: function() {
    // 这里可以添加从服务器获取数据的逻辑
    // 目前使用模拟数据
  },

  // 更新健康数据
  updateHealthData: function(type, value) {
    const healthData = this.data.healthData;
    const date = new Date().toISOString().split('T')[0];
    
    if (type === 'bloodPressure') {
      healthData.bloodPressure = {
        ...value,
        date
      };
    } else if (type === 'bloodSugar') {
      healthData.bloodSugar = {
        value,
        date
      };
    } else if (type === 'weight') {
      healthData.weight = {
        value,
        date
      };
    }

    this.setData({
      healthData
    });
  }
})