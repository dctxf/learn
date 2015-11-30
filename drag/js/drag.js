$(function(){
	var $drag = $('#drag');

	$drag.on('mousedown',function(e){
		var mouseX = e.pageX,
			mouseY = e.pageY;
			$(this).on('mousemove',function(){
				var bodyX = $(this).offset().top,
					bodyY = $(this).offset().left;
				$drag.css({
					top:bodyX - mouseY,
					left:bodyY - mouseX
				});
			});
	}).on('mouseup',function(){
	});
	
	/*$drag.on('mousemove',function(e){
		$(this).css({
			top: e.pageX + 100,
			left: e.pageY + 100
		});
	});*/
	$(document).on('mousemove',function(e){
		// console.log(e.pageX + "&" + e.pageY);
	});
});