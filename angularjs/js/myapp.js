var myModule = angular.module('myApp',[]);
myModule.directive('hello',function(){
	return{
		restrict:'AEMC',
		// template:'<div>Hi everyone</div>',
		transclude:true,
		templateUrl:'hello.html',
		// replace:true,
	};
});