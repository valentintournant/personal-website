const imgSlider = () => {
  const img = document.querySelector(".imgBox");
  if (img){
    const logos = document.querySelectorAll(".logo");
    logos.forEach((logo) => {
      logo.addEventListener('click', (event) => { // ne pas oublier l'event
        img.innerHTML = event.currentTarget.innerHTML;
        console.log(event.currentTarget.dataset);
        const backgroundColor = event.currentTarget.data.background;
        document.body.style.backgroundColor = backgroundColor;
      })
    });
  }
}

export {imgSlider};
