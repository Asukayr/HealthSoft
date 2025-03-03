Page({
  data: {
    // 页面数据
    bannerList: [],
    healthIndicators: [],
    recordList: []
  },

  onLoad: function() {
    // 页面加载时初始化数据
    this.initPageData();
  },

  initPageData: function() {
    // 模拟获取banner数据
    this.setData({
      bannerList: [
        {
          id: 1,
          imageUrl: '/assets/images/banner1.png',
          title: '慢病管理服务'
        }
      ],
      // 模拟健康指标数据
      healthIndicators: [
        {
          name: '血压',
          value: '120/80',
          unit: 'mmHg',
          status: 'normal'
        },
        {
          name: '血糖',
          value: '5.6',
          unit: 'mmol/L',
          status: 'normal'
        }
      ],
      // 模拟记录列表数据
      recordList: [
        {
          date: '2024-01-20',
          type: '血压测量',
          value: '120/80 mmHg'
        },
        {
          date: '2024-01-19',
          type: '血糖测量',
          value: '5.6 mmol/L'
        }
      ]
    });
  }
});