var result=document.getElementById("result");
var file=document.getElementById("file");
var readAsDataBtn=document.getElementById("readAsDataBtn");
var readAsBinaryBtn=document.getElementById("readAsBinaryBtn");
var readAsTextBtn=document.getElementById("readAsTextBtn");

//判断浏览器是否支持FileReader接口
if(typeof FileReader == 'undefined'){
    result.InnerHTML="<p>你的浏览器不支持FileReader接口！</p>";
    //使选择控件不可操作
    file.setAttribute("disabled","disabled");
}

readAsDataBtn.onclick = function(){
    readAsDataURL();
};
readAsBinaryBtn.onclick = function(){
    readAsBinaryString();
};
readAsTextBtn.onclick = function(){
    readAsText();
};


function readAsDataURL(){
    //检验是否为图像文件
    var file = document.getElementById("file").files[0];
    if(!/image\/\w+/.test(file.type)){
        console.log("看清楚，这个需要图片！");
        return false;
    }else{
        console.log(file);
    }
    var reader = new FileReader();
    //将文件以Data URL形式读入页面
    reader.readAsDataURL(file);
    reader.onload=function(e){
        var result=document.getElementById("result");
        //显示文件
        result.innerHTML='<img src="' + this.result +'" alt="" />';
    };
}

function readAsBinaryString(){
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    //将文件以二进制形式读入页面
    reader.readAsBinaryString(file);
    reader.onload=function(f){
        var result=document.getElementById("result");
        //显示文件
        result.innerHTML=this.result;
    };
}

function readAsText(){
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    //将文件以文本形式读入页面
    reader.readAsText(file);
    reader.onload=function(f){
        var result=document.getElementById("result");
        //显示文件
        result.innerHTML=this.result;
    };
}