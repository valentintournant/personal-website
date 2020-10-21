const imgSlider = () => {
  const sec = document.querySelector(".sec");
  if (sec){
    const img = document.querySelector(".imgBox");
    const logos = document.querySelectorAll(".logo");
    const wave = document.querySelector(".wave");
    logos.forEach((logo) => {
      logo.addEventListener('click', (event) => {
        img.innerHTML = event.currentTarget.innerHTML;
        const backgroundColor = event.currentTarget.dataset.background;
        sec.style.backgroundColor = backgroundColor;
        wave.style.backgroundColor = backgroundColor;
      })
    });
  }
}

export {imgSlider};
