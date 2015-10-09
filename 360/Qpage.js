;(function (factory) {
    /* CommonJS module. */
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define(factory);
    /* Browser globals. */
    } else {
        factory();
    }
}(function(){
	return function($){
		$.fn.run = $.fn.velocity;
		var Qpage = window.Qpage = {};
		var utime = 1000;
		Qpage.$indexes = $('.indexes span');
		var $down = $('.down'),
			$prompt = $('.prompt'),
			$s0 = $('.stage .s0'),
			$s0_down = $('.s0_down'),
			$s0_screenshot = $('.s0 .screenshot'),
			$s1 = $('.stage .s1'),
			$s1_text = $('.s1 .text'),
			$s1_screenshot = $('.s1 .screenshot'),
			$s1_a_box = $('.s1 .a_box'),
			$s1_score = $('.s1 .score'),
			$s1_uf1 = $('.s1 .uf.t1'),
			$s1_uf2 = $('.s1 .uf.t2'),
			$s1_uf3 = $('.s1 .uf.t3'),
			$s1_fn1 = $('.s1 .fn.t1'),
			$s1_fn2 = $('.s1 .fn.t2'),
			$s1_fn3 = $('.s1 .fn.t3'),
			$s1_fn4 = $('.s1 .fn.t4'),
			$s2 = $('.stage .s2'),
			$s2_screenshot = $('.s2 .screenshot'),
			$s2_scanning = $('.s2 .scanning'),
			$s2_border = $('.s2 .border'),
			$s2_text = $('.s2 .text'),
			$s3 = $('.stage .s3'),
			$s3_a_box = $('.s3 .a_box'),
			$s3_t1 = $('.s3 .t1'),
			$s3_t2 = $('.s3 .t2'),
			$s3_t3 = $('.s3 .t3'),
			$s3_t4 = $('.s3 .t4'),
			$s3_t5 = $('.s3 .t5'),
			$s3_text = $('.s3 .text'),
			$s4 = $('.stage .s4'),
			$s4_text = $('.s4 .text'),
			$s4_skin = $('.s4 .skin'),
			$s4_st1 = $('.s4 .st1'),
			$s4_st2 = $('.s4 .st2'),
			$s4_st3 = $('.s4 .st3'),
			$s4_a_box = $('.s4 .a_box'),
			$s4_select = $('.s4 .select');

		$s4_select.find('.thumbnail').on('mouseover',function(){
			$(this).addClass('active').siblings().removeClass('active');
			var _index = $(this).index();
			$s4_skin.css('background-position',-910*_index + 'px 0');
		});

		Qpage.show = [
			function( d,callback ){
				//初始化置状态
				if(d){
					$s0_screenshot.run({'opacity':0,'translateY':100},{duration:0});
				}
				else{
					$s0_screenshot.run({'opacity':0,'translateY':0},{duration:0});
				}
				//动画
				$down.run('fadeOut',{duration:utime/2});//通用下载按钮隐藏
				$s0.run('fadeIn',{duration:0});//显示场景
				$prompt.run('fadeIn',{duration:utime/2}); //显示滚动指引
				$s0_down.run('fadeIn',{duration:utime/2}); //显示下载按钮
				$s0_screenshot.run({'translateY':0,'opacity':1},{duration:utime/2,easing:'swing',complete:function(){
						callback&&callback();
				}})
			},
			function( d,callback ){
				//初始化置状态
				$s1_a_box.run({'opacity':0},{duration:0});
				$s1_text.run({rotateY:'50deg',translateZ:900,rotateX:'90deg',opacity:0},{duration:0});
				if(d){
					$s1_screenshot.run({ rotateX:0,rotateY:0,rotateZ:0,scaleX:1,scaleY:1,skewX:0,translateX:0,translateY:0,'opacity':0},{duration:0});
				}
				//动画
				$s1.run('fadeIn',{duration:0});//显示场景
				$s1_screenshot.run({'opacity':1},{duration:utime/2});
				$s1_a_box.run('fadeIn',{duration:utime/3,complete:function(){
					$s1_screenshot.run({ rotateX:'7deg',rotateY:'-4deg',rotateZ:'6deg',scaleX:.8,scaleY:.8,skewX:'-24deg',translateX:-700,translateY:-220,'opacity':1},{duration:utime,complete:function(){
							$s1_text.run({rotateY:0,translateZ:0,rotateX:0,opacity:1},{duration:utime});
							$s1_score.run({'translateY':'-60px', 'translateX':'-90px'},{duration:utime/3,delay:0});
							$s1_uf1.run({'translateY':'-60px', 'translateX':'-90px'},{duration:utime/3,delay:0});
							$s1_uf2.run({'translateY':'-50px', 'translateX':'-80px'},{duration:utime/3,delay:utime/10});
							$s1_uf3.run({'translateY':'-40px', 'translateX':'-70px'},{duration:utime/3,delay:utime/10*2});
							$s1_fn1.run({'translateY':'-50px', 'translateX':'-60px'},{duration:utime/3,delay:utime/10*3});
							$s1_fn2.run({'translateY':'-40px', 'translateX':'-50px'},{duration:utime/3,delay:utime/10*4});
							$s1_fn3.run({'translateY':'-30px', 'translateX':'-40px'},{duration:utime/3,delay:utime/10*5});
							$s1_fn4.run({'translateY':'-20px', 'translateX':'-30px'},{duration:utime/3,delay:utime/10*6,complete:function(){
									callback&&callback();
							}});
					}})
				}});
			},
			function( d,callback ){
				$s2.run('fadeIn',{duration:0});
				$s2_border.run({scaleX:.8,scaleY:.8,opacity:0},{duration:0});
				if(d){
					$s2_border.run({rotateY:0,translateZ:0,rotateX:0,opacity:0},{duration: 0 });
					$s2_text.run({rotateY:'-60deg',translateZ:'800px',opacity:0},{duration:0});
					$s2_screenshot.run({'scaleX':.7,'scaleY':.7,translateY:-143,translateX:-356,rotateY:0,translateZ:0,'opacity':1},{duration:0})
					$s2_scanning.run('fadeIn',{duration:utime/3});
					$s2_border.run('fadeIn',{duration:utime/3});
					$s2_text.run({rotateY:0,translateZ:0,rotateX:0,opacity:1},{duration:utime/2,complete:function(){
						callback&&callback();
					}})
				}
				else{
					$s2_text.run({rotateY:'60deg',translateZ:'800px',opacity:0},{duration:0});
					$s2_border.run({rotateY:'60deg',translateZ:'800px',scaleX:.8,scaleY:.8,rotateX:0,opacity:0},{duration:0});
					$s2_screenshot.run({rotateY:'60deg',translateZ:'900px',rotateX:0,'scaleX':.7,'scaleY':.7,translateY:-143,translateX:-356,opacity:0},{ duration:0});

					$s2_screenshot.run({rotateY:0,translateZ:0,rotateX:0,opacity:1},{duration:utime/2});
					$s2_border.run({rotateY:0,translateZ:0,rotateX:0,scaleX:.8,scaleY:.8,opacity:1},{duration: utime/2 });
					$s2_scanning.run('fadeIn',{ duration : utime/3 });
					$s2_text.run({rotateY:0,translateZ:0,rotateX:0,opacity:1},{duration: utime/2 , complete:function(){
						callback&&callback();
					} });
				}
			},
			function( d,callback){
				$s3.run("fadeIn", { duration: 0 }); //显示场景
				$s3_text.run({rotateY:'70deg',translateZ:'1700px',rotateX:'-220deg'},{duration:0});
				$s3_t1.run({rotateY:'30deg',translateZ:'1300px',rotateX:'-180deg'},{duration:0});
				$s3_t2.run({rotateY:'30deg',translateZ:'1400px',rotateX:'-180deg'},{duration:0});
				$s3_t3.run({rotateY:'30deg',translateZ:'1000px',rotateX:'-90deg'},{duration:0});
				$s3_t4.run({rotateY:'-30deg',translateZ:'1200px',rotateX:'-180deg'},{duration:0});
				$s3_t5.run({rotateY:'30deg',translateZ:'1300px',rotateX:'-180deg'},{duration:0});
				$s3_a_box.run({rotateZ:'-90deg'},{ duration : 0});

				$s3_a_box.run({rotateZ:0,rotateY:0},{ duration : utime });
				$s3_t1.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration: utime , delay : utime/10 });
				$s3_t2.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration: utime , delay : utime/5});
				$s3_t3.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration: utime , delay : utime/4});
				$s3_t4.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration: utime , delay : utime/3});
				$s3_text.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration: utime , delay : utime/2 });
				$s3_t5.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration: utime , delay : utime/2 , complete:function(){
					callback&&callback();
				}});
			},
			function( d,callback){
				$s4.run("fadeIn", { duration: 0 }); //显示场景
				$s4_a_box.run({rotateZ:'-90deg'},{ duration : 0});
				$s4_text.run({rotateY:'50deg',translateZ:'1200px'},{duration:0});
				$s4_st1.run({rotateY:'50deg',translateZ:'1200px'},{duration:0});
				$s4_st2.run({rotateY:'50deg',translateZ:'1200px'},{duration:0});
				$s4_st3.run({rotateY:'50deg',translateZ:'1200px'},{duration:0});
				$s4_skin.run({rotateY:'70deg',translateZ:'1700px',rotateX:'-220deg'},{duration:0});

				$s4_a_box.run({rotateZ:0,rotateY:0},{ duration : utime });
				$s4_skin.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:.8},{duration: utime , delay : utime/2 });
				$s4_text.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration: utime , delay : utime/10 });
				$s4_st1.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:.8},{duration: utime , delay : utime/8 });
				$s4_st2.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:.8},{duration: utime , delay : utime/6 });
				$s4_st3.run({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:.8},{duration: utime , delay : utime/4 , complete : function(){
					callback&&callback();
				} });
			}
		]
		Qpage.hide = [
			function( d,callback){
				$prompt.run('fadeOut',{duration:utime/2});
				$s0_down.run('fadeOut',{duration:utime/2});
				$down.run('fadeIn',{duration:utime/2});
				$s0_screenshot.run({'opacity':0},{duration:utime/2,delay:utime/10,complete:function(){
					$s0.run('fadeOut',{duration:0});
				}})
				callback&&callback();
			},
			function( d,callback){
				$s1_text.run({rotateY:'50deg',translateZ:'1300px',rotateX:'-90deg',opacity:0},{duration:utime}); //文字进入场景
				/* 截屏元素动画 sta */
				$s1_score.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:0});
				$s1_uf1.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:0});
				$s1_uf2.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:utime/10});
				$s1_uf3.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:utime/20*2});
				$s1_fn1.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:utime/10*3});
				$s1_fn2.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:utime/10*4});
				$s1_fn3.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:utime/10*5 });
				$s1_fn4.run({'translateY':0,'translateX':0},{easing:'easeInSine',duration:utime/3,delay:utime/10*6 });
				/* 截屏元素动画 end */
				if(d){
					$s1_screenshot.run({rotateX:0,rotateY:0,rotateZ:0,scaleX:.7,scaleY:.7,skewX:0,translateX:-356, translateY:-274},{duration:utime/2,delay:utime/10*6,complete:function(){
							$s1.run("fadeOut",{duration:utime/2});
							callback&callback();
					}})
				}
				else{
					$s1_screenshot.run({rotateX:0,rotateY:0,rotateZ:0,scaleX:1,scaleY:1,skewX:0,translateX:0, translateY:0},{duration:utime/2,delay:utime/2,complete:function(){
							$s1.run("fadeOut",{duration:utime/2,complete:function(){
								$s1_screenshot.run({rotateX:0,rotateY:0,rotateZ:0,scaleX:.7,scaleY:.7,skewX:0,translateX:-356, translateY:-274},{duration:0});
							}});
							callback&callback();
					}});
				}
			},
			function( d,callback){
				$s2_border.run({rotateY:'-60deg',translateZ:'800px',rotateX:'0deg',opacity:0},{duration: utime/2 });
				$s2_scanning.run({opacity:0},{duration:0 , delay: utime/2});
				if( d ){
					$s2_border.run({rotateY:'-60deg',translateZ:'800px',rotateX:'0deg',opacity:0},{duration: utime/2 });
					$s2_text.run({rotateY:'-60deg',translateZ:'800px',opacity:0},{duration: utime/2 });
					$s2_screenshot.run({rotateY:'-60deg',translateZ:'900px',opacity:0},{duration: utime/2 , complete:function(){
						$s2.run('fadeOut',{ duration : 0});
					}});
					callback&&callback();
				}
				else{
					$s2_text.run({rotateY:'60deg',translateZ:'800px',opacity:0},{duration: utime/2 });
					$s2_screenshot.run({ opacity : 0 },{ duration : utime/2 , complete : function(){
						$s2.run('fadeOut',{ duration : 0});
					}});
					callback&&callback();
				}
			},
			function( d,callback){
				$s3_text.velocity({rotateY:'70deg',translateZ:'2400px',rotateX:'-220deg'},{duration: utime,delay : utime/10});
				$s3_t1.velocity({rotateY:'-70deg',translateZ:'1200px',rotateX:'-50deg'},{duration: utime,delay : utime/8});
				$s3_t2.velocity({rotateY:'-30deg',translateZ:'2800px',rotateX:'-120deg'},{duration:utime,delay : utime/7});
				$s3_t3.velocity({rotateY:'30deg',translateZ:'2200px',rotateX:'-90deg'},{duration:utime,delay : utime/6});
				$s3_t4.velocity({rotateY:'-30deg',translateZ:'2200px',rotateX:'-180deg'},{duration:utime,delay : utime/5});
				$s3_t5.velocity({rotateY:'30deg',translateZ:'2300px',rotateX:'-180deg'},{duration:utime,delay : utime/4 });
				$s3_a_box.velocity({rotateZ:'-90deg'},{ duration : utime/2 , complete:function(){
					$s3.velocity('fadeOut',{duration: utime/2 });
					callback&&callback();
				}});
			},
			function( d,callback){
				$s4_skin.run({rotateY:'80deg',translateZ:'1100px',rotateX:'-220deg',opacity:0},{duration: utime});
				$s4_text.run({rotateY:'-80deg',translateZ:'1100px',rotateX:'-500deg',opacity:0},{duration: utime,delay : utime/10});
				$s4_st1.run({rotateY:'80deg',translateZ:'1100px',rotateX:'-120deg',opacity:0},{duration: utime,delay : utime/8});
				$s4_st2.run({rotateY:'80deg',translateZ:'1100px',rotateX:'-90deg',opacity:0},{duration: utime,delay : utime/6});
				$s4_st3.run({rotateY:'80deg',translateZ:'1100px',rotateX:'-180deg',opacity:0},{duration: utime,delay : utime/4});
                $s4_a_box.run({rotateZ:'-90deg'},{ duration : utime/2 ,delay : utime/5, complete:function(){
					$s4.run('fadeOut',{duration: utime/2 });
					callback&&callback();
				}});
			}
		]
	}(window.jQuery)
}));