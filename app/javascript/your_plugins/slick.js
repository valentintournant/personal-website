import $ from 'jquery';
import 'slick-carousel';

const slick = () => {
  const menu = document.querySelector(".toggleMenu");
  if (menu){
    $(document).ready(function(){
      $('.logo-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      });
    });
  }
}

export {slick};
