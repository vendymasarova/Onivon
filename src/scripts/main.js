import '@@/styles/main.scss';

import {Dropdown, Collapse} from "bootstrap/dist/js/bootstrap.esm";

import mainNav from './mainNav';
import carousel from './carousel';
import stickyHeaderOverlay from './stickyHeaderOverlay';
import downloadGallery from './downloadGallery';
import smoothImageMove from './smoothImageMove';

window.addEventListener('load', function() {
  Array.from(document.querySelectorAll('.dropdown-toggle'))
  .forEach(dropdownToggleNode => new Dropdown(dropdownToggleNode));

  Array.from(document.querySelectorAll('.collapse'))
    .forEach(collapseNode => new Collapse(collapseNode));

  (function () {

    var forms = document.querySelectorAll('.needs-validation')

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
  carousel();
  stickyHeaderOverlay();
  downloadGallery();
  smoothImageMove ();

});



