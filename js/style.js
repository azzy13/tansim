// For card shadow
$(document).ready(function () {
  $('.card-hover').hover(
    function () {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    },
    function () {
      $(this).removeClass('shadow-lg');
    },
  );
});