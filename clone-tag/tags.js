'use strict';
$(function(){
	var $submitBtn = $('#submit-btn'),
		$tags = $('#tags'),
		$tagsCopy = $('#tags-copy'),
		$input = $('#love-input');

	$tags.on('click','.tag',function(){
		var text = $(this)[0].innerText,
			$html = $('<li class="tag">'+text+'<span>X</span></li>');
		$(this).removeClass('tag').addClass('selected');
		$html.appendTo($tagsCopy);
	});

	$tagsCopy.on('click','.tag',function(){
		$(this).remove();
	});

	$input.on('keydown',function(e){
		if (e.which == 13) {
			var $html = $('<li class="tag">'+$(this).val()+'<span>X</span></li>'); 
			$html.appendTo($tagsCopy);
			$(this).attr('value','');
			return false;
		}else{

		}
	});

});