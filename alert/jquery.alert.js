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