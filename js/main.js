(function($){

  const slideWrap = $('.slidewrap');
  const slideZone = $('.slideZone');
  let slideleng = slideZone.children('.slide');
  
  slideleng.eq(-1).clone().prependTo(slideZone);
  
  // let slideleng = slideZone.children('.slide');
  let i = 0;
  const timed = 5000;

  let go;
  const slideGo = function(){
    go = setInterval(function(){
      i++;
      if (i >= slideleng.length-1){i = 0; slideZone.css({marginLeft:100+'%'})}
      slideZone.stop().animate({marginLeft:(-100*i)+'%'});
    },timed);
  };

  const slideStop = function(){
    clearInterval(go);
  };
  
  slideGo();
  slideZone.on('mouseenter', function(){
    slideStop();
  });
  slideZone.on('mouseleave', function(){
    slideGo();
  });    


  const next = $('.arrow-right');
  const prev = $('.arrow-left');

  next.on('click', function(){
    i++;
    if (i >= slideleng.length-1){i = 0; slideZone.css({marginLeft:100+'%'})}
      slideZone.stop().animate({marginLeft:(-100*i)+'%'});
  });

  prev.on('click', function(){
    i--;
    slideZone.stop().animate({marginLeft:(-100*i)+'%'}, function(){
      if (i<=-1){
        i=2; slideZone.css({marginLeft:(-100*i) +'%'});
      }
    });
  });



})(jQuery);