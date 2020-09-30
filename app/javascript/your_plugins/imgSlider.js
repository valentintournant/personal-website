const imgSlider = () => {
  const img = document.querySelector(".imgBox");
  if (img){
    const logos = document.querySelectorAll(".logo");
    const sec = document.querySelector(".sec");
    logos.forEach((logo) => {
      logo.addEventListener('click', (event) => {
        img.innerHTML = event.currentTarget.innerHTML;
        const backgroundColor = event.currentTarget.dataset.background;
        console.log(event.currentTarget.dataset.background);
        sec.style.backgroundColor = backgroundColor;
      })
    });
  }
}

export {imgSlider};