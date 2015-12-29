var myModule = angular.module('myApp',[]);
myModule.run(function($templateCache){
	$templateCache.put('hello.html','<div>Hi everyone!!!</div>');
});
myModule.directive('hello',function($templateCache){
	return{
		restrict:'AEMC',
		// template:'<div>Hi everyone</div>',
		// templateUrl:'hello.html',
		template: $templateCache.get('hello.html'),
		replace:true
	};
});