/**
 * Adding DOM Content loading listener
 * 
 */
document.addEventListener('DOMContentLoaded',onLoadAction);

/**
 * On HTML DOM Content loading action.
 * 
 */
function onLoadAction(){
    const currentYear = new Date().getFullYear();
    document.getElementById("dynamicYear").textContent = currentYear;
    document.getElementById("toggleMenu").addEventListener("click", menuToggleAction);
}

/**
 * Toggle Menu Icon Action to show and hind the Menu items
 * 
 */
function menuToggleAction(){
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("show");
}
