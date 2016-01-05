'use strict';

window.addEventListener('DOMContentLoaded', function() {

	var oCount = document.getElementById('count');
  var feature = new Date('2022,1,1');

	function countTime() {
		var now = new Date();
		var count = feature.getTime() - now.getTime();

		var day = Math.floor(count / (1000 * 60 * 60 * 24));
		var hours = Math.floor(count / (1000 * 60 * 60)) % 24;
		var minutes = Math.floor(count / (1000 * 60)) % 60;
		var seconds = Math.floor(count / 1000) % 60;

		oCount.innerHTML = day + '天' + hours + '时' + minutes + '分' + seconds + '秒';
	}

	countTime();

	setInterval(function() {
		countTime();
	}, 1000);

});