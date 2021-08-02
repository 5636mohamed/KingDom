let menu = document.querySelector(".overview nav .links ul"),
  theClicker = document.querySelector(".overview nav .links .sign-content");

theClicker.onclick = () => {
  menu.classList.toggle("animated");
};
