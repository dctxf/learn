/*
返回顶部原生js写法
 */
window.onload = function (){	//等待dom加载完
	var obtn = document.getElementById('btn'),	//获取返回顶部按钮
		clientHeight = document.documentElement.clientHeight,	//获取可视区域的高度
		timer = null,	//设置定时器赋值为空
		isTop = true;
	window.onscroll = function(){	//onScroll监听滚动
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;

		if (osTop >= clientHeight) {
			obtn.style.display = 'block';
		}else{
			obtn.style.display = 'none';
		}

		if (!isTop) {	//当isTop为false时清除定时器
			clearInterval(timer);
		};
		isTop = false;	//把isTop设置为false
	}

	obtn.onclick=function(){
		timer = setInterval(function(){		//设置定时器
			var osTop = document.documentElement.scrollTop || document.body.scrollTop,	//获取滚动条到顶部的距离
				isSpeed = Math.floor(-osTop / 5);	//定义速度 Math.floor舍去取整
			document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;	//使滚动条的高度等于当前高度减去当前高度的几分之几，使用+是因为isSpeed已经取负

			isTop = true;	//把isTop设置为true
			if (osTop == 0) {
				clearInterval(timer);
			};

		},10);		//间隔时间
	}
}