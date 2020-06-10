(function($){

  const slideWrap = $('.slidewrap');
  const slideZone = $('.slideZone');
  let slideleng = slideZone.children('.slide');

  // slideleng.eq(-1).clone().prependTo(slideZone);

  let i = 0;
  const timed = 5000;

    setInterval(function(){
      i++;
      if (i>slideleng.length-1){i=0; slideZone.css({marginLeft:100+'%'})}
      slideZone.stop().animate({marginLeft:(-100*i)+'%'});
    },timed);




})(jQuery);