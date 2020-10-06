const menuToggle = () => {
  const menu = document.querySelector(".toggleMenu");
  if (menu){
    const navigation = document.querySelector(".navigation");
    menu.addEventListener('click', (event) => {
      menu.classList.toggle('active')
      navigation.classList.toggle('active')
    });
  }
}

