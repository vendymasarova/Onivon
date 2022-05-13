import '@@/styles/main.scss';

import {Dropdown} from "bootstrap/dist/js/bootstrap.esm";


import mainNav from './mainNav';

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
});

(function () {

  var forms = document.querySelectorAll('.needs-validation')

  console.log(forms);

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

mainNav();

console.log('hello');
