$(function(){
	var result = $('#result'),
		readAsDataBtn = $('#readAsDataBtn'),
		readAsBinaryBtn = $('#readAsBinaryBtn'),
		readAsTextBtn = $('#readAsTextBtn');

		readAsDataBtn.on('click',function(){
			readAsDataURL();
		});
		readAsBinaryBtn.on('click',function(){
			readAsBinaryString();
		});
		readAsTextBtn.on('click',function(){
			readAsText();
		});

		//判断浏览器是否支持FileReader接口
		if(typeof FileReader == 'undefined'){
		    result.html("<p>你的浏览器不支持FileReader接口！</p>");
		    //使选择控件不可操作
		    file.attr("disabled","disabled");
		}
		/*file.on('change',function(){
			console.log(file[0].files[0]);
		});*/
		function readAsDataURL(){
		    //检验是否为图像文件
		    var file = $("#file")[0].files[0];
		    if(!/image\/\w+/.test(file.type)){
		        alert("看清楚，这个需要图片！");
		        return false;
		    }else{
		    	console.log(file);
		    }
		    var reader = new FileReader();
		    //将文件以Data URL形式读入页面
		    reader.readAsDataURL(file);
		    reader.onload=function(){
		        var result=$("#result");
		        //显示文件
		        result.html('<img src="' + this.result +'" alt="" />');
		    };
		}

		function readAsBinaryString(){
		    var file = $("#file")[0].files[0];
		    var reader = new FileReader();
		    //将文件以二进制形式读入页面
		    reader.readAsBinaryString(file);
		    reader.onload=function(){
		        var result=$("#result");
		        //显示文件
		        result.text(this.result);
		    };
		}

		function readAsText(){
		    var file = $("#file")[0].files[0];
		    var reader = new FileReader();
		    //将文件以文本形式读入页面
		    reader.readAsText(file);
		    reader.onload=function(){
		        var result=$("#result");
		        //显示文件
		        result.html(this.result);
		    };
		}
});