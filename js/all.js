
var workH = $('#works-wrap').offset().top,
    aboutH = $('#about-wrap').offset().top,
    strengthH = $('#strength-wrap').offset().top,
    contactH = $('#contact-wrap').offset().top,
    $goLink = $('.side-menu li a'),
    $homeBtn = $('.side-menu li:nth-child(1) a'),
    $workBtn = $('.side-menu li:nth-child(2) a'),
    $aboutBtn = $('.side-menu li:nth-child(3) a'),
    $strengthBtn = $('.side-menu li:nth-child(4) a'),
    $contactBtn = $('.side-menu li:nth-child(5) a');

$('.work-item-link').on('mouseenter', function () {
  $(this).find('.work-item-left b').animate({
    bottom: '50%'
  });
});
$('.work-item-link').on('mouseleave', function () {
  $(this).find('.work-item-left b').animate({
    bottom: '-50%'
  })
})
$('.light-screen').on('mouseenter', function () {
  $(this).find('.author').animate({
    top: '5%'
  })
})
$('.light-screen').on('mouseleave', function () {
  $(this).find('.author').animate({
    top: '-11%'
  })
})
$('.light-screen').on('mouseenter', function () {
  $(this).find('.social-link').animate({
    bottom: '5%'
  })
})
$('.light-screen').on('mouseleave', function () {
  $(this).find('.social-link').animate({
    bottom: '-11%'
  })
})

$(window).on('scroll', function () {
  var scrollH = $(window).scrollTop() + 100;

  if( scrollH > workH && aboutH > scrollH) {
    $goLink.removeClass('active');
    $workBtn.addClass('active');
  } else if (scrollH >= aboutH && scrollH <= strengthH ) {
    $goLink.removeClass('active');
    $aboutBtn.addClass('active');
  } else if (scrollH > strengthH && scrollH <= contactH) {
    $goLink.removeClass('active');
    $strengthBtn.addClass('active');
  } else if (scrollH > contactH ){
    $goLink.removeClass('active');
    $contactBtn.addClass('active');
  }
})
function show() {
  $('#start-overlay').hide();
  $('#header').show();
  $('#inside-page').show();
}
$(window).on('load', function () {
  console.log(1);
  $('#header').hide();
  $('#inside-page').hide();
  setTimeout(show, 1000);
})

