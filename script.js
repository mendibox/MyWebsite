let projectTitle = document.getElementById('project-title');

projectTitle = ['One', 'Two', 'Three'];













let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
/*
//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
*/
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        projectTitle[i].innerText = "Yeah!";
    }
    slides[slideIndex - 1].style.display = "block";
}


function toggleMainMenu() {
    let mainMenu = document.getElementById('menu-container');
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
    }
}

function showers() {
    let showersTaken = 180; //Real number of showers taken since August 2024
    let unconsciousLiters = 93; //Average liters quantity in a single shower without any kind of consciousness
    let semiConsciousLiters = 41; //Mid consciousness
    let consciousLiters = 20 //Liters spend with an extreme consciousness
    let result = (unconsciousLiters - consciousLiters) * showersTaken;
    let element = document.getElementById('liters');
    element.textContent = result;
}

window.addEventListener('load', showers)