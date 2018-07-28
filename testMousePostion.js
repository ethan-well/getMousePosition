(function() {
  var box = document.getElementById('drag');
  box.onmousedown = function(ev) {
    console.log(ev.clientX, ev.clientY); // 获取鼠标相对浏览器窗口左上角的位置
    console.log(ev.screenX, ev.screenY); // 获取鼠标相对屏幕左上角的位置
  }
})();