const menuIcon = document.querySelector("#menu-icon");
const menuContainer = document.querySelector(".menu__container");
const bodyContainer = document.querySelector(".body");

function toggleMainMenu() {
  menuContainer.classList.toggle("menu__container-active");
}

function toggleScroll() {
    bodyContainer.classList.toggle('body-overflow-hidden');
}

menuIcon.addEventListener("click", toggleMainMenu);
menuIcon.addEventListener('click', toggleScroll);

function showers() {
  let showersTaken = 180; //Real number of showers taken since August 2024
  let unconsciousLiters = 93; //Average liters quantity in a single shower without any kind of consciousness
  let semiConsciousLiters = 41; //Mid consciousness
  let consciousLiters = 20; //Liters spend with an extreme consciousness
  let result = (unconsciousLiters - consciousLiters) * showersTaken;
  let element = document.getElementById("liters");
  element.textContent = result;
}

window.addEventListener("load", showers);
