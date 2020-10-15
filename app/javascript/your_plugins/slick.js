import 'slick-carousel';

const slick = () => {
  const menu = document.querySelector(".toggleMenu");
  if (menu){
    $(document).ready(function(){
      $('.logo-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      });
    });
  }
}

export {slick};
