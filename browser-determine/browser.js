/**
 * [获取浏览器名称方式一]
 */
(function getExplorer() {
	var explorer = window.navigator.userAgent ;
	//ie 
	if (explorer.indexOf('MSIE') >= 0) {
		console.log('ie');
	}
	//firefox 
	else if (explorer.indexOf('Firefox') >= 0) {
		console.log('Firefox');
	}
	//Chrome
	else if(explorer.indexOf('Chrome') >= 0){
		console.log('Chrome');
	}
	//Opera
	else if(explorer.indexOf('Opera') >= 0){
		console.log('Opera');
	}
	//Safari
	else if(explorer.indexOf('Safari') >= 0){
		console.log('Safari');
	}
})();


/**
 * 获取浏览器名称及版本号
 */

var browser = getBrowserInfo() ;
var verinfo = (browser+"").replace(/[^0-9.]/ig,""); 
console.log(browser); 


function getBrowserInfo(){
	var agent = navigator.userAgent.toLowerCase() ;
	var regStr_ie = /msie [\d.]+;/gi ;
	var regStr_ff = /firefox\/[\d.]+/gi
	var regStr_chrome = /chrome\/[\d.]+/gi ;
	var regStr_saf = /safari\/[\d.]+/gi ;
	//IE
	if(agent.indexOf("msie") > 0){
		return agent.match(regStr_ie) ;
	}

	//firefox
	if(agent.indexOf("firefox") > 0){
		return agent.match(regStr_ff) ;
	}

	//Chrome
	if(agent.indexOf("chrome") > 0){
		return agent.match(regStr_chrome) ;
	}

	//Safari
	if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0){
		return agent.match(regStr_saf) ;
	}
}