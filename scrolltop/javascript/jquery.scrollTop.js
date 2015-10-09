/**
 * [scrollTop 返回顶部]
 */

(function( window , $){
	$.scrolling = function( options ){

		var $select = $( options.selector ).find('a'), //给谁绑定click事件
			$target = $( options.target || 'html,body' ), //目标元素，如果没有。默认是body，
			during = parseInt(options.during) || 300, //运动事件，如果没有，默认300ms

			targetOffsetTop = $target.offset().top; //目标offsetTop

		$select.on('click',function(){
			$('html,body').stop().animate({
				scrollTop : targetOffsetTop
			}, during , function(){
				options.callback&&options.callback( targetOffsetTop );
			});
			return false;
		})

	}
})( window , jQuery);