import Typed from 'typed.js';

const loadDynamicText = () => {
  new Typed('#typed-text', {
    strings: ["I Code"],
    typeSpeed: 200,
    loop: false
  });
}

export {loadDynamicText};
