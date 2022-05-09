import '@@/styles/main.scss';

import {Dropdown} from "bootstrap/dist/js/bootstrap.esm";


import mainNav from './mainNav';

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
});

mainNav();

console.log('hello');
