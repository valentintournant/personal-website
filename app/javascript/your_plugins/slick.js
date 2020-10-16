import 'slick-carousel';

const slick = () => {
  const menu = document.querySelector(".toggleMenu");
  if (menu){
    $(document).ready(function(){
      $('.logo-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });
  }
}

export {slick};
