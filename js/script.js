$(window).scroll(function() {
  if ( $(window).height() + $(window).scrollTop() >= 11000 && $(window).height() + $(window).scrollTop() <= 11100 ){
    $("#shadow1").addClass("shadow");
  }
  else if ($(window).height() + $(window).scrollTop() > 11200 && $(window).height() + $(window).scrollTop() <= 11300 ){
    $("#shadow2").addClass("shadow");
  }
  else if ($(window).height() + $(window).scrollTop() > 11400 && $(window).height() + $(window).scrollTop() <= 11500 ){
    $("#shadow3").addClass("shadow");
  }
  else if ($(window).height() + $(window).scrollTop() > 11600 && $(window).height() + $(window).scrollTop() <= 11700 ){
    $("#shadow5").addClass("shadow");
  }
  else if ($(window).height() + $(window).scrollTop() > 11800 && $(window).height() + $(window).scrollTop() <= 11900 ){
    $("#shadow6").addClass("shadow");
  }
  else {
    $("#shadow1").removeClass("shadow");
    $("#shadow2").removeClass("shadow");
    $("#shadow3").removeClass("shadow");
    $("#shadow5").removeClass("shadow");
    $("#shadow6").removeClass("shadow");
  }
});

$("#wrapper").click(function (){
  $(".icon").toggleClass("close")
});

$(document).ready(function() {

/* Every time the window is scrolled ... */

$(window).scroll( function(){

/* Check the location of each desired element */
$('.hideme').each( function(i){

    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();


    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window - 500 > bottom_of_object ){

        $(this).css("opacity", 1 - $(window).scrollTop() / 100);
    }
    else{
       $(this).css("opacity", 1 );
    }
    console.log(bottom_of_object);
  console.log(bottom_of_window);
}); 
});
});


function myFunction() {
    document.getElementById('leftbutton').style.cssText = 
    'background-color:white;color:black;display:inline-block;width:100px;height:50px;border-radius:50px;text-align:center;';
}

// $(document).ready(function(){
//   $(".article").scroll(function(){
//     $("#cont18h1").slideUp();
//   });
//   $(".article").scroll(function(){
//     $("#cont18h1").slideDown();
//   });
// });

// $(document).ready(function(){
//   $("#container18").scroll(function(){
//     $("#cont18h1").slideUp("slow");
//   });
// });

// $(window).scroll( function(){

// /* Check the location of each desired element */
// $('#cont18h1').each( function(i){

//     var bottom_of_object = $(this).position().top + $(this).outerHeight();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//      // If the object is completely visible in the window, fade it it 
//       if( bottom_of_window < bottom_of_object && bottom_of_window > bottom_of_window + 1) {
//       $(this).css("transform",'translate(0,-500px');
//     }
//     console.log(bottom_of_object);
//     console.log(bottom_of_window);
// }); 
// }); 
