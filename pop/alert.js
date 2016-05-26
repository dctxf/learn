window.alert = function(options) {
	var id = options.id || 'alertContainer';
	var className = options.className || 'alertWarp';
	var content = options.content || '点下面的按钮即可关闭';
      var btnCont = options.btnCont || '确定';

	var container = document.createElement('div');
	container.setAttribute('class', className);
	container.setAttribute('id', id);
	container.innerHTML = '<div class="alertWarp"><div class="cont">' + content + '</div><div class="buttons"><button id="alertCloseBtn" class="button">'+btnCont+'</button></div></div>';

	var first = document.body.firstChild;
	document.body.insertBefore(container, first);

      function closeWindow(){
            var oBtn = document.getElementById('alertCloseBtn');
            var oAlert = document.getElementById(id);

            oBtn.onclick = function(){
                  oAlert.setAttribute('style','display:none');
            };
      }
      closeWindow();
};