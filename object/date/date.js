'use strict';

window.addEventListener('DOMContentLoaded', function() {

	var oDateText = document.getElementById('date-text');

	function check(i) {
		if (i < 10) {
			i = '0' + i;
		}
		return i;
	}

	function showTime() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = check(date.getMinutes());
		var seconds = check(date.getSeconds());
		var iWeek = date.getDay();

		var week = new Array(7);
		week[0] = '星期日';
		week[1] = '星期一';
		week[2] = '星期二';
		week[3] = '星期三';
		week[4] = '星期四';
		week[5] = '星期五';
		week[6] = '星期六';

		oDateText.innerHTML = year + '年' + month + '月' + day + '日' + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + week[iWeek];
	}

	showTime();

	setInterval(function() {
		showTime();
	}, 1000);

});