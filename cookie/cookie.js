	window.onload = function () {
		getMyCookie ();
		// console.log(document.getElementsByTagName('a'));
	}
	var btn = document.getElementById('goto');
	btn.onclick = function () {
		var src = "http://www.baidu.com/s?wd="+document.getElementById('text').value;
		window.open( src ,"_blank");
		addCookie(document.getElementById('text').value,src);
		getMyCookie ();
	}

	function getMyCookie () {
		var cookieArr = document.cookie.split(";"),
			len = cookieArr.length,
			i = 0 ,
			html = "";
		for (; i<len ;i++){
			html += "<a href='"+unescape(cookieArr[i].split("=")[1])+"' target='_blank'>"+ cookieArr[i].split("=")[0]+"</a>";
		}
		document.getElementById('history').innerHTML = html;
	}

	function addCookie( name , value , expire ){
		var cookieStr = "",
			value = value || "",
			expire = expire || 365,
			date = new Date();
		if( name.match(/^\s*$/) || name == "") return;
		date.setTime( date.getTime() + expire*1000*60*60*24 );
		cookieStr = name + "=" + escape( value ) + " ;expires= " + date.toGMTString();
		document.cookie = cookieStr;
		if( document.cookie.split(";").length > 5) {
			deleteCookie( document.cookie.split(";")[0].split("=")[0] );
		}
	}
	function getCookie( name ) {
		var cookieArr = document.cookie.split(";"),
			len = cookieArr.length,
			i = 0 ;
		for(;i < len ; i++ ) {
			return cookieArr[i].split("=")[0] == name ? unescape(cookieArr[i].split("=")[1]) : "";
		}
	}
	function deleteCookie( name ) {
		addCookie( name , "" , -1);
	}