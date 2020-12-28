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
    if( bottom_of_window-400> bottom_of_object ){

        $(this).css("opacity", 1 - $(window).scrollTop() / 100);
    }
    else{
       $(this).css("opacity", 1 );
    }
}); 
});
});




function myFunction() {
  document.getElementById("left2").innerHTML = "13 mm focal length";
  document.getElementById("left3").innerHTML = "120º field of view";
  document.getElementById("left4").innerHTML = "ƒ/2.4 aperture";
  document.getElementById("left5").innerHTML = "5-element lens";
  document.getElementById("left6").innerHTML = "Lens correction";
  document.getElementById("left7").innerHTML = "";
  document.getElementById("right2").innerHTML = "13 mm focal length";
  document.getElementById("right3").innerHTML = "120º field of view";
  document.getElementById("right4").innerHTML = "ƒ/2.4 aperture";
  document.getElementById("right5").innerHTML = "5-element lens";
  document.getElementById("right6").innerHTML = "Lens correction";
  document.getElementById("right7").innerHTML = "";

}

function function1() {
  document.getElementById("left2").innerHTML = "26 mm focal length";
  document.getElementById("left3").innerHTML = "1.4 µm pixels";
  document.getElementById("left4").innerHTML = "ƒ/1.6 aperture";
  document.getElementById("left5").innerHTML = "100% Focus Pixels";
  document.getElementById("left6").innerHTML = "7-element lens";
  document.getElementById("left7").innerHTML = "OIS";
  document.getElementById("right2").innerHTML = "13 mm focal length";
  document.getElementById("right3").innerHTML = "1.7 µm pixels";
  document.getElementById("right4").innerHTML = "ƒ/1.6 aperture";
  document.getElementById("right5").innerHTML = "100% Focus Pixels";
  document.getElementById("right6").innerHTML = "7-element lens";
  document.getElementById("right7").innerHTML = "Sensor-shift OIS";
}

function function2() {
  document.getElementById("left2").innerHTML = "52 mm focal length";
  document.getElementById("left3").innerHTML = "ƒ/2.0 aperture";
  document.getElementById("left4").innerHTML = "Focus Pixels";
  document.getElementById("left5").innerHTML = "6-element lens";
  document.getElementById("left6").innerHTML = "OIS";
  document.getElementById("left7").innerHTML = "";
  document.getElementById("right2").innerHTML = "65 mm focal length";
  document.getElementById("right3").innerHTML = "1.7 µm pixels";
  document.getElementById("right4").innerHTML = "ƒ/2.2 aperture";
  document.getElementById("right5").innerHTML = "Focus Pixels";
  document.getElementById("right6").innerHTML = "6-element lens";
  document.getElementById("right7").innerHTML = "OIS";
  }

$(document).ready(function(event){
  $('form input').click(function(event){
    $('form > div').css('transform', 'translateX('+$(this).data('location')+')');
    $(this).parent().siblings().removeClass('selected');
    $(this).parent().addClass('selected');
  });
});

function image1 (){
  var img = 'images/image42.webp';
  document.getElementById('img').appendChild(img);
}

