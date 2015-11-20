window.onload = function(){
	var openBtn = document.getElementById('launch'),	//全屏按钮
		outBtn = document.getElementById('exit');		//退出全屏按钮
		openBtn.onclick = function(){
			launchFullscreen(document.documentElement); 
		}
		outBtn.onclick = function(){
			exitFullscreen();
		}

	// 判断各种浏览器，找到正确的方法
	function launchFullscreen(element) {
	  if(element.requestFullscreen) {
	    element.requestFullscreen();
	  } else if(element.mozRequestFullScreen) {
	    element.mozRequestFullScreen();
	  } else if(element.webkitRequestFullscreen) {
	    element.webkitRequestFullscreen();
	  } else if(element.msRequestFullscreen) {
	    element.msRequestFullscreen();
	  }
	}

	// launchFullScreen(document.getElementById("videoElement")); // 某个页面元素
	function exitFullscreen() {
	  if(document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if(document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if(document.webkitExitFullscreen) {
	    document.webkitExitFullscreen();
	  }
	}
		
}