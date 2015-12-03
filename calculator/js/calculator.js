window.onload = function(){
	var calculator = document.getElementById('calculator'),
		resultInput = document.getElementById('result'),
		numBtn = calculator.getElementsByClassName('num'),
		clearBtn = document.getElementById('clear'),
		backBtn =  document.getElementById('back'),
		result = 0;
		// console.log(clearBtn);

		results(0);

		// 数字输入
		for (var i = 0; i < numBtn.length; i++) {
			(function(i){
				numBtn[i].onclick = function(){
					result += this.innerText;
					results(result);
				}
			})(i);
		}

		// 清空按钮
		clearBtn.onclick = function(){
			clear();
		}

		// 回退按钮
		backBtn.onclick = function(){
			backspace();
		}

		function backspace(){
			var val = resultInput.value.charAt(resultInput.value.length-1);
			console.log(val);
		}

		function clear(){
			results(0);
		}
		function results(num){
			if (num === 0) {
				num = 0;
				resultInput.value = num;
				result = 0;
			}else if(num.substr(0,1) == '0'){
				num = num.substr(1);
				resultInput.value = num;
			}
		}
}