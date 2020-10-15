import Typed from 'typed.js';

const loadDynamicText = () => {
  const menu = document.querySelector(".toggleMenu");
  if (menu){
    new Typed('#typed-text', {
      strings: ["I Code"],
      typeSpeed: 200,
      loop: false
    });
  }
}

export {loadDynamicText};
