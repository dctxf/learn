window.onload = function(){
	var calculator = document.getElementById('calculator'),
		resultInput = document.getElementById('result'),
		resultInputValue = document.getElementById('result').value,
		numBtn = calculator.getElementsByClassName('num'),
		clearBtn = document.getElementById('clear'),
		backBtn =  document.getElementById('back'),
		equalBtn = document.getElementById('equal'),
		addBtn = document.getElementById('add'),
		subtractBtn = document.getElementById('subtract'),
		pointBtn = document.getElementById('point'),
		result = 0;

		resultShow(0);
		resultInputValue = '0';

		// 数字输入
		for (var i = 0; i < numBtn.length; i++) {
			(function(i){
				numBtn[i].onclick = function(){
					
					if (resultInputValue === '0') {
						resultInputValue = '';
						resultInputValue += this.innerText;
						resultShow(resultInputValue);
					}else{
						resultInputValue += this.innerText;
						resultShow(resultInputValue);
					}
					/*console.log(resultInputValue.length);
					console.log(resultInputValue);*/
				}
			})(i);
		}


		function parse(str){
			if (str.indexOf('.') > 0) {
				return parseFloat(str);
			}else{
				return parseInt(str);
			}
		}
		

		// 清空按钮
		clearBtn.onclick = function(){
			clear();
		}
			console.log(resultInputValue);

		// 回退按钮
		backBtn.onclick = function(){
			console.log(resultInputValue.length);
			console.log(resultInputValue);

			if (resultInputValue.length > 1) {
				backspace();
			}else if(resultInputValue === '0'){
				return false;
			}else if(resultInputValue.length == 1){
				resultShow(0);
				resultInputValue = '0';
				return false;
			}

		}

		// 加法
		addBtn.onclick = function(){
			add();
			return true;
		}

		// 减法
		subtractBtn.onclick = function(){

		}

		// 等于按钮
		equalBtn.onclick = function(){
			if (addBtn.onclick() === true) {
				add();
				console.log(result);
			}
		}

		// 加法
		function add(){
			result += parse(resultInputValue);
			resultInputValue = '0';
			resultShow(result);
		}

		// 回退按钮方法
		function backspace(){
			var val = resultInputValue.substr(0,resultInputValue.length-1);
			if (val === '') {
				resultShow(0);
				result = 0;
				resultInputValue = 0;
			}else if(val === '0'){
				return false;
			}else{
				resultShow(val);
				result = parse(val);
				resultInputValue = val;
			}
		}

		// 清空按钮方法
		function clear(){
			resultShow(0);
			result = 0;
			resultInputValue = '0';
		}

		// 结果显示方法
		function resultShow(num){
			if (num === 0) {
				num = 0;
				resultInput.value = num;
				result = 0;
			}else if(String(num).substr(0,1) == '0'){
				num = num.substr(1);
				resultInput.value = num;
			}else{
				resultInput.value = num;
			}
		}
}