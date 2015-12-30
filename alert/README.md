# 自定义弹出

自己写方法替代`window.alert`

下面是利用`jQuery`实现的代码

```
(function(){
	window.alert = function(options) {

    //解析alert内容中的换行符
  	options = options.toString().replace(/\\/g,'\\').replace(/\n/g,'<br />').replace(/\r/g,'<br />');

    //自定义div弹窗
  	var alertdiv='<div id="alertdiv">'+
      '<div id="alerttext">'+
      options+
      '</div>'
      +'<br /><input type="submit" name="button" id="alertbtn" value="确定" onclick="$(this).parent().remove(); "/></div>';

    //动态加载div
  	$('body').append(alertdiv);

    //设置偏移数值，实现div居中
  	$("#alertdiv").css({
      "margin-left":$("#alertdiv").width()/2*(-1)-20,
      "margin-top":$("#alertdiv").height()/2*(-1)-20});

    //显示
  	$("#alertdiv").show();
	};
})();
```

html代码

```
<input type="submit" name="button" id="button" value="点击弹出alert自定义窗口" />
```

css代码

```
#alertdiv{
    position:absolute;
    display:none ;
    overflow:hidden;
    padding:20px;
    top: 50%;
    left: 50%;
    text-align:center;
    line-height:22px;
    background-color:#fff;
    border:1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    max-width: 280px;
    width: 80%;
}
#alerttext{
    font-size: 14px;
    color: #333;
    line-height: 1.5;
}
#alertbtn{
    width: 100%;
    line-height: 34px;
    background-color: #fff;
    border: 1px solid #ddd;
    color: red;
    text-align: center;
    border-radius:4px;
    cursor: pointer;
    outline: none;
    font-size: 14px;
    color: #EB5508;
}
#alertbtn:hover{
    background-color:red;
    border-color:red;
    color: #fff;
}
```

调用js代码

```
$(function(){
	$('#button').on('click',function(){
		alert('点击弹出alert自定义窗口');
	});
});
```

## 弹出插件layer

[官网地址](http://layer.layui.com/)

> layer是一款近年来备受青睐的web弹层组件，她具备全方位的解决方案，致力于服务各水平段的开发人员，您的页面会轻松地拥有丰富友好的操作体验。

> 在与同类组件的比较中，layer总是能轻易获胜。她尽可能地在以更少的代码展现更强健的功能，且格外注重性能的提升、易用和实用性，正因如此，越来越多的开发者将媚眼投上了layer（已被2248438人次关注）。layer兼容了包括IE6在内的所有主流浏览器。 她数量可观的接口，使得您可以自定义太多您需要的风格，每一种弹层模式各具特色，广受欢迎。当然，这种“王婆卖瓜”的陈述听起来总是有点难受，因此你需要进一步了解她是否真的如你所愿。

> layer遵循LGPL协议，将永久性提供无偿服务。历经数年，截至到2015年09月01日，已运用在10万余家web平台，其中包括中国联通、蚂蚁短租、慕课网、phpyun等等知名网站，如果您有大型项目也在使用layer，您可以联系作者，以便在此展现案例，也为您的品牌推广尽一些绵薄之力。**Fly**


