import '@@/styles/main.scss';

import {Dropdown, Collapse} from "bootstrap/dist/js/bootstrap.esm";
import 'wowjs';

import mainNav from './mainNav';
import carousel from './carousel';
import stickyHeaderOverlay from './stickyHeaderOverlay';
import downloadGallery from './downloadGallery';
import smoothImageMove from './smoothImageMove';
import timelineAnimation from './timelineAnimation';

window.addEventListener('load', function() {
  new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  ).init();



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
  timelineAnimation();
});



