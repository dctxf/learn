$(function(){
	var $input = $('#select-input'),
		$selectList = $('#select-list');

		$input.on('click',function(e){
			$selectList.show();
			$(this).addClass('active');
			e.stopPropagation();
		});

		$selectList.on('click','li',function(e){
			var val = $(this).text();
			$input.attr('value',val);
			// $input.removeClass('active');
			$(this).siblings().remove();
			$selectList.hide();
			e.stopPropagation();
		});

		$(document).on('click',function(){
			$selectList.hide();
			$input.removeClass('active');
		});
		
});