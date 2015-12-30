window.onload = function(){
	var items = document.getElementById('items'),
		item = items.getElementsByClassName('item'),
		check = items.getElementsByClassName('check');

		for (var i = 0; i < item.length; i++) {
			(function(i){
				item[i].onclick = function(){
					console.log(i);
				};
			})(i);
		}
};