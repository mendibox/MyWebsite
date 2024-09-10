function toggleMenu() {
    let mainMenu = document.getElementById('menu-container');
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
    }
}

function toggleHero() {
    var heroElement = document.getElementById('hero');
    var heroStyles = window.getComputedStyle(heroElement);
    var heroWidth = heroStyles.getPropertyValue('width');
    let heroSource = document.getElementById('hero');
    if (heroWidth <= '109px') {
        heroSource.setAttribute('src', './img/mine.png');
    } else {
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
    let showersTaken = 9; //Real number of showers taken since August 2024
    let unconsciousLiters = 93; //Average liters quantity in a single shower without any kind of consciousness
    let semiConsciousLiters = 41; //Mid consciousness
    let consciousLiters = 20 //Liters spend with an extreme consciousness
    let result = (unconsciousLiters - consciousLiters) * showersTaken;
    let element = document.getElementById('liters');
    element.innerHTML = result;
}

window.addEventListener('load', showers)