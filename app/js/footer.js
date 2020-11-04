$(document).ready(function() {
  $(function (){
    var header = $("header").height();
    var content = $("#id-404").height();
    var footer = $("footer").height();
    var content_size = header + content + footer + 100
    var window_size = $(window).height();

    if(window_size > content_size) {
      $('footer').addClass('position');
    } else {
      $('footer').removeClass('position');
    }

  });
  
});