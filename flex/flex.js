window.onload = function(){
	var tit = document.getElementById('title'),
		cont = document.getElementById('list');

		tit.onclick = function(){
			if(cont.style.display == 'none'){
				cont.style.display = 'block';
				this.getElementsByTagName('i')[0].className = 'arrows';
			}else{
				cont.style.display = 'none';
				this.getElementsByTagName('i')[0].className = 'unfold';
			}
		};
};