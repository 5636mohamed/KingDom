let menu = document.querySelector(".overview nav .links ul"),
  theClicker = document.querySelector(".overview nav .links .sign-content"),
  theButton = document.querySelectorAll(".link"),
  theScreen = document.querySelector(".about .screen"),
  theImage = document.querySelector(".about .container .image img"),
  overlay = theImage.nextElementSibling;

theClicker.onclick = () => {
  menu.classList.toggle("animated");
};

theImage.onclick = () => overlay.style.cssText = `height: 100%; color: #fff;`;

overlay.onclick = () => overlay.style.cssText = `heigh: 0; color: transparent;`;

function helloWorld(){
  console.log("hello, world");
}

theButton.forEach(theButton, button, (button, i) => button[i].onclick = helloWorld());
