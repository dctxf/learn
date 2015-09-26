(function( window , $){

	$.dslide = function( options ){

		var $container = $( options.container),  //容器
			$content = $( options.content), //内容容器
			$toolbar = $( options.toolbar ), //操作容器


			during = options.during || 500, //动画执行时间，默认500  可选
			activeClass = options.toolbarActive || '.active', //选中状态 class  可选   默认 active
			easing = options.easing || 'linear', //动画参数。可选 。  默认是 linear

			delay = options.delay, //是否是一个 轮播图



			len = $toolbar.find('>li').length, //内容个数
			singleWidth = $content.find('>li').width(), //单个内容长度
			contentWidth = singleWidth*len, //ul实际长度
			activeClassname = activeClass.replace('.','');



		var utils = {


			/**
			 * [init 初始化方法]
			 */
			init : function(){

				utils.setConetentWidth();
				utils.bindToolbarEvent();
				if( $.isNumeric(delay) ){
					utils.doSlide();
				}

			},

			/**
			 * [doAnimate 容器滚动方法]
			 * @param  {[number]} index [当前选中项的索引值]
			 */
			doAnimate : function( index ){
				$content.stop().animate({
					left : -index*singleWidth,
				}, during ,easing , function(){
					$toolbar.find('>li').eq(index).addClass( activeClassname)
						.siblings().removeClass( activeClassname );
				});
			},

			/**
			 * [setConetentWidth 给容器赋实际宽度值]
			 */
			setConetentWidth : function(){
				$content.width( contentWidth ); //给容器赋实际宽度值
			},

			/**
			 * [bindToolbarEvent toolbar绑定点击事件]
			 */
			bindToolbarEvent : function(){

				$toolbar.find('>li').on('click',function(){ //toolbar点击事件
					utils.doAnimate( $(this).index() );
				});
			},

			/**
			 * [doSlide 轮播图自动滚动]
			 */
			doSlide : function(){

				var timer = null;

				function autoRun(){

					var _index = $toolbar.find('>li' + activeClass).index(),
						next = _index + 1;
					if( next === len ){
						next = 0;
					}
					//utils.doAnimate( next );
					$toolbar.find('>li').eq(next).trigger('click');

					timer = setTimeout(function(){
						autoRun();
					}, delay);
				}

				setTimeout(function(){
					autoRun();
				}, delay);


				$container.on('mouseenter',function(){
					clearTimeout( timer );
				}).on('mouseleave',function(){
					setTimeout(function(){
						autoRun();
					}, delay);
				});

			}

		};

		utils.init();

	}


})( window , jQuery);