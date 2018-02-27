$( function() {

  // dropdown nav for mobile and tablet

  if ($(window).width() < 745) {
    $(".brand").click(function(){
        $(".nav").removeClass(".display.none");
        $(".nav").slideToggle();
    });
  }

//   $(window).resize(function() {
//     //do something
//
//     var width = $(window).width();
//     if (width < 750) {
//       $(".moo").click(function(){
//           $(".poo").removeClass(".display.none");
//           $(".poo").slideToggle();
//       });    }
// });
//


  // $(window).resize(function(){
  //   if ($(this).width() > 750) {
  //     $(".poo").addClass(".display.none");
  //   }
  // });


  // smooth scroll

  $('.scroll').click(function(){

    var target = $($(this).attr('href')).offset().top;

    $('html, body').animate({
      scrollTop: target
    },'slow');
  });

  // main nav - selection layout

$.fn.selectNav = function () {

    $(this).mouseenter(function() {
        $(this).css({
          "color": "#008489",
          "padding-bottom": "12px",
          "border-bottom": "2px solid #008489"
        });
    });

    $(this).mouseleave(function() {
        $(this).css({
          "color": "#484848",
          "padding-bottom": "none",
          "border-bottom": "none"
        });
    });

    $(this).click(function() {
      $(this).css({
        "color": "#008489",
        "padding-bottom": "12px",
        "border-bottom": "2px solid #008489"
      });
    });

  }

$('main nav a').selectNav();
$('main nav a span').selectNav();


// reset main nav span

$("main nav").mouseenter(function(){
  $("main nav a span").css({
    "color": "#484848",
    "padding-bottom": "none",
    "border-bottom": "none"
  });
});

// slider arrows

$.fn.slider = function () {

  $(".slider").hover(function(){
    $("i").toggleClass( "hidden" );
  });

  $("i").click(function() {
    console.log("slider click");
    // $("figure").slideToggle("slow");
 })

};


$('.slider').slider();


}); // END
