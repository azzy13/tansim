const addbtn = document.querySelector('.addbtn');
const cofounder = document.querySelector('.cofounder');
const deletebtn = document.querySelector('.deletebtn');

let i = 1;
addbtn.addEventListener('click', (e) => {
  e.preventDefault();
  let add_fields = `<div class="last">
  <div class="form-group div${i}">
  <label class="para">Name of the Co-Founder ${i}</label>
  <input
    type="text"
    class="form-control form-control-lg"
    placeholder="Name of the Co-Founder"
    name="name"
    value=""
    required
  />
  </div>
  <div class="form-group div${i}">
  <label class="para">Educational Qualification ${i++}</label>
  <input
    type="text"
    class="form-control form-control-lg"
    placeholder="Educational Qualification"
    name="name"
    value=""
    required
  />
  </div>
  </div>
  `;

  cofounder.innerHTML += add_fields;
});

deletebtn.addEventListener('click', (e) => {
  e.preventDefault();
  const div = document.querySelector('.cofounder');
  div.removeChild(div.lastElementChild);
  i--;
});
