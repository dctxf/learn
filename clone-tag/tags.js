'use strict';
$(function(){
	var $submitBtn = $('#submit-btn'),
		$tags = $('#tags'),
		$tagsCopy = $('#tags-copy'),
		$input = $('#love-input');

	$tags.on('click','.tag',function(){
		var text = $(this)[0].innerText,
			$html = $('<li class="tag"><em>'+text+'</em><span>X</span></li>');
		$(this).removeClass('tag').addClass('selected');
		$html.appendTo($tagsCopy);
	});

	$tagsCopy.on('click','.tag',function(){
		var text = $(this).find('em')[0].innerText,
			tagText = $tags[0].innerText;
			console.log(text);
		$(this).remove();
	});

	$input.on('keydown',function(e){
		if (e.which == 13 && $input.val() !== '') {
			var $html = $('<li class="tag">'+$(this).val()+'<span>X</span></li>'); 
			$html.appendTo($tagsCopy);
			$input.val('');
			return false;
		}else if( $input.val() === '' && e.which == 8){
			$tagsCopy.find('.tag:last-child').remove();
		}else if (e.which == 13 && $input.val() === ''){
			return false;
		}
	});

	$('body').on('keydown',function(e){
		// console.log(e.which);
		// console.log();
	});

});