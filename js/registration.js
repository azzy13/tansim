$('.window .close').click(function (e) {
  $.cookie('CamSession1', 'CAM');
  if ($('#Private Clients').is(':checked')) {
    window.location.replace('http://stackoverflow.com');
  } else if ($('#Professional Intermediaries').is(':checked')) {
    window.location.replace('http://exchange.com');
  }
  e.preventDefault();
  $('#mask').hide();
  $('.window').hide();
});
