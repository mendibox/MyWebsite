function toggleMenu() {
    let mainMenu = document.getElementById('menu-container');
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
    }
}

function showers () {
    let showersTaken = 6; //Real number of showers taken since August 2024
    let litersSaved = 100; //Need confirmation
    let result = showersTaken * litersSaved;
    let element = document.getElementById('liters');
    element.innerHTML = result;
}

window.addEventListener('load', showers)