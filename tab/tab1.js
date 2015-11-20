'use strict';
$(function(){
    var $tab = $('#tab'),
        $btn = $tab.find('.btn').find('li'),
        $cont = $tab.find('.cont').find('li'),
        i = 0;

    var clickFunc = function (i) {
        // $btn[i].onclick = function(){
        //  $($cont[i]).show().siblings().hide();
        // };
        $($btn[i]).on('click', function () {
            $($cont[i]).show().siblings().hide();
        });
    };
    
    for (; i < $btn.length; i++) {
        clickFunc(i);
    }
});