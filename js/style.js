// For card shadow
$(document).ready(function () {
  var fixHeight = function () {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150,
    );
  };
  fixHeight();
  $(window).resize(function () {
    fixHeight();
  });
  $('.navbar .navbar-toggler').on('click', function () {
    fixHeight();
  });
  $('.navbar-toggler, .overlay, .close1').on('click', function () {
    $('.mobileMenu, .overlay, .close1').toggleClass('open');
  });

  $('#ideation').click();
  $('.card-hover-sm').hover(
    function () {
      $(this).addClass('shadow').css('cursor', 'pointer');
    },
    function () {
      $(this).removeClass('shadow');
    },
  );
  $('.card-hover').hover(
    function () {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    },
    function () {
      $(this).removeClass('shadow-lg');
    },
  );
});

// For toggling cards
$('#ideation').click(function () {
  $('#firstGroup').show();
  $('#secondGroup, #thirdGroup, #fourthGroup').hide();

  $('#ideation').addClass('shadow-lg');
  $('#validation, #earlytraction, #scaling').removeClass('shadow-lg');

  $('.icon1').removeClass('greyscale');
  $('.icon1').addClass('font-weight-bold ');

  $('.icon2, .icon3, .icon4').addClass('greyscale');
  $('.icon2, .icon3, .icon4').removeClass('font-weight-bold ');
});

$('#validation').click(function () {
  $('#secondGroup').show();
  $('#firstGroup, #thirdGroup, #fourthGroup').hide();

  $('#validation').addClass('shadow-lg');
  $('#ideation, #earlytraction, #scaling').removeClass('shadow-lg');

  $('.icon2').removeClass('greyscale');
  $('.icon2').addClass('font-weight-bold');

  $('.icon1, .icon3, .icon4').addClass('greyscale');
  $('.icon1, .icon3, .icon4').removeClass('font-weight-bold');
});

$('#earlytraction').click(function () {
  $('#thirdGroup').show();
  $('#firstGroup, #secondGroup, #fourthGroup').hide();

  $('#earlytraction').addClass('shadow-lg');
  $('#validation, #ideation, #scaling').removeClass('shadow-lg');

  $('.icon3').removeClass('greyscale');
  $('.icon3').addClass('font-weight-bold');

  $('.icon1, .icon2, .icon4').addClass('greyscale');
  $('.icon1, .icon2, .icon4').removeClass('font-weight-bold');
});

$('#scaling').click(function () {
  $('#fourthGroup').show();
  $('#firstGroup, #thirdGroup, #secondGroup').hide();

  $('#scaling').addClass('shadow-lg');
  $('#validation, #earlytraction, #ideation').removeClass('shadow-lg');

  $('.icon4').removeClass('greyscale');
  $('.icon4').addClass('font-weight-bold');

  $('.icon1, .icon2, .icon3').addClass('greyscale');
  $('.icon1, .icon2, .icon3').removeClass('font-weight-bold');
});
