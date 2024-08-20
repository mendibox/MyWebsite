function toggleMenu() {
    let mainMenu = document.getElementById('main-menu-items');
    if (mainMenu.style.display === 'block') {
        mainMenu.style.display = 'none';
    } else {
        mainMenu.style.display = 'block';
    }
}