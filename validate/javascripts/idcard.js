$(function(){
	console.log(11);
	var $form = $('#validate-form');

	var validator = $form.validate({
		debug : true,	//测试开关
		//验证规则
		rules : {
			'id-card' : {
				required : true,
				idCard : true
			}
		},
		//提示规则
		messages : {
			'id-card' : {
				required : '这是必填项'
			}
		}
	});

	$.validator.addMethod('idCard',function(value,element,params){
		var idCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
		return this.optional(element) || (idCard.test(value));
	},'请输入正确的身份证号');

	
});