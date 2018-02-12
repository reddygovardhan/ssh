$(document).ready(function () {
      $(".button-collapse").sideNav();
      $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
	$(".slider").slider();
	$('nav ul a').click(function(){
    $('nav ul a').removeClass("active");
    $('nav ul a').removeClass("main-nav-active");
    $(this).addClass("active");
    $(this).addClass("main-nav-active");
});
	$('.carousel.carousel-slider').carousel({full_Width: true});

});
