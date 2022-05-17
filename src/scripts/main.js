import '@@/styles/main.scss';

import {Dropdown, Collapse} from "bootstrap/dist/js/bootstrap.esm";


import mainNav from './mainNav';

window.addEventListener('load', function() {

  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl)
  });


  var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
  var collapseList = collapseElementList.map(function (collapseEl) {
    return new Collapse(collapseEl)
  })

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

});



