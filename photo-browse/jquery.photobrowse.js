$(function(){

	var $btn = $('.photo-btn');

	$btn.on('click',function(){

		var src = $(this).data('src'); 
		//data-  开头的属性，可以直接使用  .data('xx'); 
		//否则只能使用   .attr('datasrc') 全名取值

		showPic( src );
	});

	var showPic = function( src ){

		var $body = $('body'),
			$fullView = $body.find('.fullscreen-view'),
			during = 300;

		if( $fullView.length === 0 ){
			//没有被创建过
			
			var $html = $('<div class="fullscreen-view">' +
						'<a href="#">X</a>' +
						'<span>加载中</span>' +
						'</div>');
			$html.find('a').on('click',function(){
				var $parent = $(this).parent()
				$parent.fadeOut(during);
				setTimeout(function(){
					$parent.find('span').html('加载中').show();
					$parent.find('img').remove();
				},during);
			});

			$body.append( $html );

			$fullView = $body.find('.fullscreen-view');

			$fullView.fadeIn(during);

		}else{
			$fullView.fadeIn(during);
		}

		var img = new Image();

		img.onload = function(){
			$fullView.append('<img src="'+ src +'">');
			$fullView.find('span').hide();
		}
		img.onerror = function(){
			$fullView.find('span').html('图片加载失败');
		}

		img.src = src;


	};


})