Page({
  data: {
    messages: [],
    inputValue: ''
  },

  onLoad: function() {
    this.setData({
      messages: [{
        type: 'ai',
        content: '你好！我是AI助手，很高兴为您服务。请问有什么我可以帮您的吗？'
      }]
    });
  },

  handleInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  sendMessage: function() {
    if (!this.data.inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: this.data.inputValue
    };

    this.setData({
      messages: [...this.data.messages, userMessage],
      inputValue: ''
    });

    // TODO: 在这里添加与AI模型的实际对话逻辑
    setTimeout(() => {
      const aiMessage = {
        type: 'ai',
        content: '这是一个模拟的AI回复。实际开发时，这里需要接入真实的AI对话接口。'
      };
      this.setData({
        messages: [...this.data.messages, aiMessage]
      });
    }, 1000);
  }
});