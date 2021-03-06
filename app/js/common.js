$(function(){
  $('.header-slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false
  });
});

$(function(){
  $('.customers-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.reviews-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


});




// popup
$(document).ready(function () {

  $('.popup-open').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeIn();
    $(popUpId).addClass('popup-animated');

  });

  $('.popup-close, .popup-close-bg').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeOut();
    $(popUpId).removeClass('popup-animated');

  });

});

jQuery(document).ready(function(){
  $('.header-slider').on('afterChange', function(event, slick, currentSlide){
     $('.header-slider .header-title').removeClass('js-header-title-active');
     $('.header-slider .slick-active .header-title').addClass('js-header-title-active');
     $('.header-slider .header-btn').removeClass('js-header-btn-active');
     $('.header-slider .slick-active .header-btn').addClass('js-header-btn-active');


  });
});

$(function(){
  var menu_selector = ".nav-js"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
  function onScroll(){
    var scroll_top = $(document).scrollTop() - 65;
    $(menu_selector + " a.scroll").each(function(){
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }

  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    $("a.scroll").click(function(e){
      e.preventDefault();
      $(document).off("scroll");
      $(menu_selector + " a.active").removeClass("active");
      $(this).addClass("active");
      var hash = $(this).attr("href");
      var target = $(hash);
      $("html, body").animate({
          scrollTop: target.offset().top - 65
      }, 500, function(){
        window.location.hash = hash;
        $(document).on("scroll", onScroll);
      });
    });
  });

  $(window).scroll(function () {

    var header_height = $("#header").height();

    if ($(this).scrollTop() > 400 ) {
      $('.scroll-up').fadeIn();
      $('.planning').addClass('btn-solid');
      $('.top-line').addClass('active');
    }

    else {

      $('.scroll-up').fadeOut('active');
      $('.planning').removeClass('btn-solid');
      $('.top-line').removeClass('active');

    }

  });
});


jQuery(document).ready(function( $ ) {
  if(document.documentElement.clientWidth < 1201) {
    $('.hamburger').on('click', function() {
      $(this).toggleClass('opened');
      $('header .nav').fadeToggle();
      $('header .nav-secondary').fadeToggle();
      // $('.lang-list').fadeOut();
    });
    $("header nav a[href^='#'].scroll").on('click', function() {
      $('.hamburger').toggleClass('opened');
      $("header .nav").fadeOut(200);
      $('header .nav-secondary').fadeToggle();
    });
  }
});


// tabs
$(function(){
  $('.tabs > li > a').click(function(){
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hidden');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hidden');
    $(this).parent().addClass('active');
    return false
  });
});

// tabs
$(function(){
  $('.tabs-plan > li > a').click(function(){
    $(this).parents('.tab-wrap-plan').find('.tab-cont-plan').addClass('hidden');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hidden');
    $(this).parent().addClass('active');
    return false
  });
});




// popup + data
$(document).ready(function () {

  $('.popup-data-open').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeIn();
    $(popUpId).addClass('popup-animated');

    var title         = $(this).find('h3.title').html(),
        content       = $(this).find('.popup-content').html(),
        icon          = $(this).find('i').attr('class');


    $('.popup-data-content').html(
      '<div class="text-content">\
          <div class="popup-title-wrapper">\
            <h3 class="popup-title">' + title + '</h3>\
          </div>\
          <div class="d-flex d-block-xs">\
            <div class="popup-icon-wrapper d-flex jc-center ai-center rel">\
              <div class="popup-icon"><i class="' + icon + '"></i></div>\
            </div>\
            <div class="popup-text">' + content + '</div>\
          </div>\
        </div>'
    )

  });

  $('.popup-close, .popup-close-bg').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeOut();
    $(popUpId).removeClass('popup-animated');

  });

});


// popup + plan
$(document).ready(function () {

  $('.popup-plan-open').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeIn();
    $(popUpId).addClass('popup-animated');

  });

  $('.popup-close, .popup-close-bg').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeOut();
    $(popUpId).removeClass('popup-animated');

  });

});

$(function(){
  $( ".path" ).hover(
    function() {

      var popUpData = $(this).data('popupFloor');
          $('.plan-floor-list').find('[data-path="' + popUpData + '"]').toggleClass('active');
    }
  );


  $( ".plan-floor-item" ).hover(
    function() {

      var popUpData = $(this).data('path');

          $('.map').find('[data-popup-floor="' + popUpData + '"]').toggleClass('active');
    }
  );

  $('#plan .path').on('click', function() {

    var popUpData = $(this).data('popupFloor');
      popUpId = document.getElementById(popUpData);

    $('.popup-floor-tab .popup-floor-cont').addClass('hidden');
    $('.popup-floor-tab').find('#floor_' + popUpData + '').removeClass('hidden');

    $('.popup-floor-list .popup-floor-item').removeClass('active');
    $('.popup-floor-list').find('[href="#floor_' + popUpData + '"]').parent().addClass('active');


  });

  $('#plan .plan-floor .plan-floor-item').on('click', function() {

    var popUpData = $(this).data('path');
      popUpId = document.getElementById(popUpData);

    $('.popup-floor-tab .popup-floor-cont').addClass('hidden');
    $('.popup-floor-tab').find('#floor_' + popUpData + '').removeClass('hidden');

    $('.popup-floor-list .popup-floor-item').removeClass('active');
    $('.popup-floor-list').find('[href="#floor_' + popUpData + '"]').parent().addClass('active');


  });
});




// popup + video
$(document).ready(function () {

  $('.popup-video-open').on('click', function() {

    var popUpData = $(this).data('popupName');
        popUpId = document.getElementById(popUpData);
        
    $(popUpId).fadeIn();
    $(popUpId).addClass('popup-animated');

    var data         = $('body').find('#data-video-popup .data-js').html();

    $('#data-video-content').html(data)

  });

  $('.popup-video-close, .popup-video-close-bg').on('click', function() {

    var popUpData = $(this).data('popupName');
      popUpId = document.getElementById(popUpData);

    $(popUpId).fadeOut();
    $(popUpId).removeClass('popup-animated');
    setTimeout(function () {
      $('#data-video-content > div').remove();
    }, 800);

  });

});













$(function(){

$('.slider-row-2-col-4').slick({
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 992000,
  arrows: false,
  rows: 2,
  pauseOnHover: false,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
});

$(function(){
  $('[data-fancybox="gallery"]').fancybox({});
});


$(function(){
$('.big-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.small-gallery'
  // speed: 700,
  // autoplay: true,
  // autoplaySpeed: 992000
});

$('.small-gallery').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  rows: 2,
  dots: false,
  arrows: false,
  infinite: true,
  // centerMode: true,
  focusOnSelect: true,
  asNavFor: '.big-gallery'
});

});


// document.addEventListener('DOMContentLoaded', function() {



//   jQuery('.type-space-item').find('.type-space-title').appendTo(".subclass", $this);
// }, false);

// $(document).ready(function() {

// $('.type-space-item').watch(function() {

  // var w = $('.type-space-item')
  // $('.type-space-item').click(function() {
  //   $(this.find('.type-space-item').add(".class");
  // });

  // w.find('.type-space-item').appendTo(".type-space-img");

  // });
// });

// $(document).ready(function() {
//   var w = $('.type-space-item').width();

//   if(document.documentElement.clientWidth < 993) {
//     jQuery(this).find('.type-space-title', $this).appendTo(".type-space-img");
//   }
// });

// jQuery('.type-space-item').find('.type-space-title', $this).appendTo(".type-space-img", $this);



// $('.type-space-item').ready(function() {

// // $('.type-space-item').click(function() {
//   $( this ).find('.type-space-title').appendTo(".type-space-img");
//   return;
// });


 
$('a[href*="#"].scroll-btn').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  }, 300, 'linear');
});

window.onload = function(){

  var options =
    {
        srcNode: 'img',             // grid items (class, node)
        margin: '20px',             // margin in pixel, default: 0px
        width: '300px',             // grid item width in pixel, default: 220px
        max_width: '380px',              // dynamic gird item width if specified, (pixel)
        resizable: true,            // re-layout if window resize
        transition: 'all 0.5s ease' // support transition for CSS3, default: all 0.5s ease
    }

    document.querySelector('.grid').gridify(options);
    document.querySelector('.grid').style.opacity = "1";
  }