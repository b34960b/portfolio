(function($){

  const imgBox = $('.imgBox');
  const rImgBox = imgBox.find('.r-imgBox');
  const rTextArea = $('.r-textArea');

  rImgBox.on('mouseenter', function(){
    rTextArea.css({'display':'block'});
    rTextArea.animate({'transition': 'all 500ms ease'});
  });
  rImgBox.on('mouseleave', function(){
    rTextArea.css({display:'none'});
  });




})(jQuery);