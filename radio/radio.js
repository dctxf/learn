window.onload = function(){
	var radioBox = document.getElementById('todo'),
		radio = radioBox.getElementsByTagName('label');

		for (var i = 0; i < radio.length; i++) {
			(function( i ){
				radio[i].onclick = function(){
					var input = this.getElementsByTagName('input');
					for (var i = 0; i < radio.length; i++) {
						radio[i].getElementsByTagName('input')[0].checked = false;
						radio[i].style.backgroundPositionY = '0';
					}
					input[0].checked = true;
					this.style.backgroundPositionY = '-20px';
					
				};
			})( i );
		}
};