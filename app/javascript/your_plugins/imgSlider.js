const imgSlider = () => {
  const img = document.querySelector(".imgBox");
  if (img){
    const logos = document.querySelectorAll(".logo");
    logos.forEach((logo) => {
      logo.addEventListener('click', () => {
        console.log(logo.innerHTML);
        img.innerHTML = logo.innerHTML;
      })
    });
  }
}

export {imgSlider};
