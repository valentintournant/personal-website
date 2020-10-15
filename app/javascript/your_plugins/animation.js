import { gsap } from "gsap";

const animation = () => {
  const featuresContentTitle = document.querySelector(".features-content h3");
  const featuresContentP = document.querySelectorAll(".features-content p");
  const featuresContentButton = document.querySelector(".features-content .btn");
  const featuresList = document.querySelectorAll(".features-list li");
  if (featuresContentTitle){
    const featuresTl = gsap.timeline();
    featuresTl
    .from([featuresContentTitle, featuresContentP, featuresContentButton], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "powe3.out",
        stagger: {
          amount: 0.2
        }
      })
      .from(featuresList, {
        delay: -0.4,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: {
          amount: 0.4
        }
      });
  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    triggerElement: ".textBox",
    triggerHook: 0,
    reverse: false
  })
  .setTween(featuresTl)
  .addTo(controller);
  }
}

export {animation};
