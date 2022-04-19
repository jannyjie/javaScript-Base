// 您將在一秒鐘內看到一條消息彈出。如果您在一秒鐘內多次單擊該頁面，則該警報僅出現一次。

const alarm = {
    remind: function(aMessage) {
      alert(aMessage);
      this.timeoutID = undefined;
    },
  
    setup: function() {
      if (typeof this.timeoutID === 'number') {
        this.cancel();
      }
  
      this.timeoutID = setTimeout(function(msg) {
        this.remind(msg);
      }.bind(this), 1000, 'Wake up!');
    },
  
    cancel: function() {
      clearTimeout(this.timeoutID);
    }
  };
  
window.addEventListener('click', () => alarm.setup() );
  