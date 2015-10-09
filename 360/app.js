seajs.use('jquery', function() {
	seajs.use(['mousewheel','velocity'],function(){
		seajs.use('Qpage',function(){
			$(function(){
				var conf = {
					beforeIndex : 0, //上个场景索引
					currentIndex : 0, //当前场景索引
					playing : false, //动画执行锁
					downward : true, //方向true为向下,false为向上
					ui : window.Qpage || {}
				};
				var sceneNum = conf.ui.show.length;//场景数量
				var showScene = function(){
					conf.playing = true; //锁定触发事件
					if( sceneNum > 0 ){
						conf.ui.hide[conf.beforeIndex](conf.downward,function(){
							conf.ui.show[conf.currentIndex](conf.downward,function(){
								conf.playing = false; //解除锁定
							})
						})
					}
				};
				sceneNum&&conf.ui.show[0]( conf.downward ); //默认显示第一个场景
				$(document).on('mousewheel',function(e){
					if( !conf.playing ){
						conf.downward = e.deltaY<0?true:false;
						conf.beforeIndex = conf.currentIndex;
						conf.currentIndex = e.deltaY>0?conf.currentIndex-1:conf.currentIndex+1;
						conf.currentIndex = conf.currentIndex>=sceneNum?0:conf.currentIndex;
						conf.currentIndex = conf.currentIndex<0?sceneNum-1:conf.currentIndex;
						conf.ui.$indexes.removeClass('current').eq(conf.currentIndex).addClass('current');
						showScene();
					}
					return false;
				})
			});
		});
	});
});