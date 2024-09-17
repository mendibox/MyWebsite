

function toggleMenu() {
    let mainMenu = document.getElementById('menu-container');
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
    }
}

function toggleHero() {
    const containerElement = document.getElementById('hero-container');
    const containerStyles = window.getComputedStyle(containerElement);
    const containerProperty = containerStyles.getPropertyValue('width');
    const heroSource = document.getElementById('hero');
    if (containerProperty > '0px' && containerProperty < '117px') {
        heroSource.setAttribute('src', './img/mine.png');
    } else if (containerProperty >= '117px') {
        heroSource.setAttribute('src', './img/myPicture.jpg');
    }
}

function activarMenu() {
    let iconoMenu = document.getElementById('contenedor-menu');
    if (iconoMenu.style.display === 'block') {
        iconoMenu.style.display = 'none';
    } else {
        iconoMenu.style.display = 'block';
    }
}

function showers() {
    let showersTaken = 12; //Real number of showers taken since August 2024
    let unconsciousLiters = 93; //Average liters quantity in a single shower without any kind of consciousness
    let semiConsciousLiters = 41; //Mid consciousness
    let consciousLiters = 20 //Liters spend with an extreme consciousness
    let result = (unconsciousLiters - consciousLiters) * showersTaken;
    let element = document.getElementById('liters');
    element.textContent = result;
}

window.addEventListener('load', showers)