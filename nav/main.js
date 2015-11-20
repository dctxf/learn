$(function(){
  var $container = $('.nav'),
      $slider = $('.slider');
  $container.find('li').on('mouseenter',function(e){
    var whichTab = $(this).index(),
        btnX = whichTab * $(this).width();
        $slider.css('left',btnX);
  }).on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  }).on('mouseleave',function(){
    var $btn = $container.find('.active'),
        btnX = $btn.index() * $btn.width();
    $slider.css('left',btnX);
  })
})