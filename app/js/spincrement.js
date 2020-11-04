$(function(){
  $(document).ready(function(){

    var show = true;
    var countbox = "#spincrement-1";
    if (document.querySelector("#spincrement-1")) {
      $(window).on("scroll load resize", function(){

          if(!show) return false;
          var w_top = $(window).scrollTop();
          var e_top = $(countbox).offset().top;
          var w_height = $(window).height();
          var d_height = $(document).height();
          var e_height = $(countbox).outerHeight();

          if(w_top + 550 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
              $("#spincrement-1").spincrement({
                  from: 0,
                  to: 10,
                  thousandSeparator: "",
                  duration: 3000
              });
              $("#spincrement-2").spincrement({
                  from: 0,
                  to: 3,
                  thousandSeparator: "",
                  duration: 3000
              });
              $("#spincrement-3").spincrement({
                  from: 0,
                  to: 6,
                  thousandSeparator: "",
                  duration: 3000
              });
              $("#spincrement-4").spincrement({
                  from: 0,
                  to: 2,
                  thousandSeparator: "",
                  duration: 3000
              });
              $("#spincrement-5").spincrement({
                  from: 0,
                  to: 200,
                  thousandSeparator: "",
                  duration: 4000
              });
              show = false;
          }
      });
    }

      

  });
});
