$(document).ready(function(){
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
    padding: 0,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $(".zoom").hover(function(){
    $(this).addClass('transition');
  }, function(){
    $(this).removeClass('transition');
  });
});

