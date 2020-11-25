var checker = document.getElementById('checkbox1');
var sendbtn = document.getElementById('btnterm');
checker.onchange = function () {
  sendbtn.disabled = !this.checked;
};

function toggle(source) {
  checkboxes = document.getElementsByName('interests');
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}
