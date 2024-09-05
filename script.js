function toggleMenu() {
    let mainMenu = document.getElementById('menu-container');
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
    }
}

function toggleHero() {
    var about = document.getElementById('about');
    var aboutStyles = window.getComputedStyle(about);
    var aboutWidth = aboutStyles.getPropertyValue('width');
    let heroImage = document.getElementById('hero');
    //let heroStyles = window.getComputedStyle(heroImage);
    //let heroAttribute = heroImage.getAttribute('src');
    
    
    //alert(aboutWidth);
    if(aboutWidth >= '481px'){
        heroImage.setAttribute('src', './img/myPicture.jpg');
        //eroStyles.setProperty('width', 'fit-content');
        //aboutStyles.setProperty()
    } else if (aboutWidth <= '480px'){
        heroImage.setAttribute('src', './img/mine.png');
    }
    /*
    
    
    if(heroAttribute === './img/mine.png'){
        
    }*/
}

function activarMenu(){
    let iconoMenu = document.getElementById('contenedor-menu');
    if (iconoMenu.style.display === 'block') {
        iconoMenu.style.display = 'none';
    } else {
        iconoMenu.style.display = 'block';
    }
}

function showers () {
    let showersTaken = 7; //Real number of showers taken since August 2024
    let unconsciousLiters = 93; //Average liters quantity in a single shower without any kind of consciousness
    let semiConsciousLiters = 41; //Mid consciousness
    let consciousLiters = 20 //Liters spend with an extreme consciousness
    let result = (unconsciousLiters - consciousLiters) * showersTaken;
    let element = document.getElementById('liters');
    element.innerHTML = result;
}

window.addEventListener('load', showers)