// sector form
const form = document.querySelector('.formSubmit');
var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (r1.checked == true) {
    document.location.replace('./basic-info.html');
  } else if (r2.checked == true) {
    document.location.replace('./profile-creation.html');
  } else if (r3.checked == true) {
    document.location.replace('./profile-creation.html');
  }
});
