// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//= require Chart.min


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import {imgSlider} from "../your_plugins/imgSlider";
import {menuToggle} from "../your_plugins/menuToggle";
import {animation} from "../your_plugins/animation";
import {loadDynamicText} from "../your_plugins/typed";
import {slick} from "../your_plugins/slick";
import {apple} from "../your_plugins/apple";
import {chartjs} from "../your_plugins/chartjs";
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  imgSlider();
  menuToggle();
  animation();
  loadDynamicText();
  slick();
  apple();
  chartjs();
});
