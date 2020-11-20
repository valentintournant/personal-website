import { gsap } from "gsap";

const apple = () => {
  const intro = document.querySelector('.intro');
  if(intro) {
    const video = document.querySelector('video');
    const text = document.querySelector('h1');

    //END SECTION
    const section = document.querySelector('section');
    const end = section.querySelector('h1');

    //SCROLL MAGIC
    const controller = new ScrollMagic.Controller();

    //SCENES
    let scene = new ScrollMagic.Scene({
      duration: 9000, //time you want to fix the animation
      triggerElement: intro,
      triggerHook: 0
    })
      .addIndicators()
      .setPin(intro) //pin the animation you want
      .addTo(controller);

    //TEXT ANIMATION
    const textAnim = gsap.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

    let scene2 = new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: intro,
      triggerHook: 0
    })
      .setTween(textAnim)
      .addTo(controller);



    //Video Animation
    let accelamount = 0.1; //the frame of the video
    let scrollpos = 0; //where you scroll
    let delay = 0;

    scene.on("update", e => {
      scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
      delay += (scrollpos - delay) * accelamount;
      //console.log(scrollpos, delay);
      video.currentTime = delay;
    }, 33.3); //number 1000 % number of frame you have
  }
}

export {apple};









