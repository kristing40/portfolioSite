//removes and adds active class for header navigation
$("#nav ul li a").click(function () {
  $("#nav li a").removeClass("active");
  $(this).addClass('active');
});

//EventListeners to view project application
$("#fotofinder-btn").on('click', function(e) {
  e.preventDefault();
  window.location = "https://kristing40.github.io/Foto_Finder/";
});

//EventListener to click to static comp production websites
$("#static1-btn").on('click', function (e) {
  e.preventDefault();
  window.location = "https://kristing40.github.io/kg-static-comp-challenge-1/";
});

$("#static2-btn").on('click', function(e) {
  e.preventDefault();
  window.location = "https://kristing40.github.io/kg-static-comp-challenge-2/";
});

$("#static3-btn").on('click', function(e) {
  e.preventDefault();
  window.location = "https://kristing40.github.io/Static-Comp-Challenge-3/";
});

//EventListener to compare my rendition to static compare
$("#compare1-btn").on('click', function(e) {
  e.preventDefault();
  window.location = "https://github.com/kristing40/kg-static-comp-challenge-1/blob/master/README.md";
});

$("#compare2-btn").on('click', function(e) {
  e.preventDefault();
  window.location = "https://github.com/kristing40/kg-static-comp-challenge-2/blob/master/README.md";
});

$("#compare3-btn").on('click', function(e) {
  e.preventDefault();
  window.location = "https://github.com/kristing40/Static-Comp-Challenge-3/blob/master/README.md";
});


//scroll to the top function
$(window).scroll(function() {
  if($(this).scrollTop() > 100) {
    $('#scroll-up-btn').fadeIn();
  }else {
    $('#scroll-up-btn').fadeOut();
  }
});

$('#scroll-up-btn').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 600);
  return false;
})
