function toggleMenu() {
    let mainMenu = document.getElementById('menu-container');
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
    }
}

function savedLiters () {
    let showers = 6;
    let savedWater = 100;
    let result = showers * savedWater;
    let element = document.getElementById('liters');
    element.innerHTML = result;
}