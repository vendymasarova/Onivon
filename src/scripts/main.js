import '@@/styles/main.scss';

import {Dropdown, Collapse} from "bootstrap/dist/js/bootstrap.esm";
import Swiper from 'swiper';
import 'swiper/css';


import mainNav from './mainNav';
import carousel from './carousel';

import lightGallery from 'lightgallery';

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgHash from 'lightgallery/plugins/hash'


window.addEventListener('load', function() {

  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl)
  });

  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail, lgHash],
    licenseKey: 'your_license_key',
    speed: 500,
  });

  lightGallery(document.getElementById('lightgallery1'), {
    plugins: [lgHash],

    galleryId: 1,
    hash:true,
  });
  lightGallery(document.getElementById('lightgallery2'), {
    plugins: [lgHash],

    galleryId: 2,
    hash:true,
  });

  console.log(lightGallery);


  // var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
  // var collapseList = collapseElementList.map(function (collapseEl) {
  //   return new Collapse(collapseEl)
  // })

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

});



