var checkbox = document.querySelector('.checked');
var addfields = document.querySelector('.addfields');
const a = document.querySelector('.add_field');
var i = 2;

checkbox.addEventListener('change', function () {
  if (this.checked) {
    a.classList.remove('invisible');
    let addfield = `<div class="parent">
    <h1 class="head-6">Organization 1 </h1>
    <div class="form-group">
      <label class="para mt-2">Startup Name</label
      ><input
        type="text"
        class="form-control form-control-lg"
        placeholder="Startup Name"
        name="Startup Name"
        value=""
        required
      />
    </div>
    <div class="form-group">
      <label class="para">Website / Application Link</label
      ><input
        type="text"
        class="form-control form-control-lg"
        placeholder="Website / Application Link"
        name="Website / Application Link"
        value=""
        required
      />
    </div>
    <div class="form-group">
      <label class="para">Startup India HUB Profile Link</label
      ><input
        type="text"
        class="form-control form-control-lg"
        placeholder="Startup India HUB Profile Link"
        name="Startup India HUB Profile Link"
        value=""
        required
      />
    </div>
    <div class="form-group">
      <label for="about_me" class="para">Brief</label
      ><textarea
        class="form-control form-control-lg"
        name="brief"
        rows="8"
        placeholder="Write about the description"
        required
      ></textarea>
    </div>
    <div class="additional_fields">
      <div class="cofounder"></div>
    </div>
    </div>`;

    addfields.innerHTML = addfield;
  } else {
    a.classList.add('invisible');
    const div = document.querySelector('.addfields');
    div.removeChild(div.childNodes[0]);
  }
});

var addbtn = document.querySelector('.addbtn');

addbtn.addEventListener('click', (e) => {
  e.preventDefault();
  let nextfields = `<div class="parent">
    <h1 class="head-6 mt-4">Organization ${i++}
    </h1>
    <div class="form-group">
      <label class="para mt-2">Startup Name</label
      ><input
        type="text"
        class="form-control form-control-lg"
        placeholder="Startup Name"
        name="Startup Name"
        value=""
        required
      />
    </div>
    <div class="form-group">
      <label class="para">Website / Application Link</label
      ><input
        type="text"
        class="form-control form-control-lg"
        placeholder="Website / Application Link"
        name="Website / Application Link"
        value=""
        required
      />
    </div>
    <div class="form-group">
      <label class="para">Startup India HUB Profile Link</label
      ><input
        type="text"
        class="form-control form-control-lg"
        placeholder="Startup India HUB Profile Link"
        name="Startup India HUB Profile Link"
        value=""
        required
      />
    </div>
    <div class="form-group">
      <label for="about_me" class="para">Brief</label
      ><textarea
        class="form-control form-control-lg"
        name="brief"
        rows="8"
        placeholder="Write about the description"
        required
      ></textarea>
    </div>
    <div class="additional_fields">
      <div class="cofounder"></div>
    </div>
    </div>`;
  addfields.innerHTML += nextfields;
});

function deletefield(source) {
  if (i > 2) {
    addfields.removeChild(addfields.lastElementChild);
    i--;
  }
}
