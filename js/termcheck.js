var checker = document.getElementById('checkbox1');
var sendbtn = document.getElementById('btnterm');
checker.onchange = function () {
  sendbtn.disabled = !this.checked;
};
