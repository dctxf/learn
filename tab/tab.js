$(function(){
	var $btn = $('#tab .btn li'),
		$cont = $('#tab .cont li');

	$btn.on('click',function(){
		var index = $(this).index();
		$cont.eq(index).show().siblings().hide();
	});
});