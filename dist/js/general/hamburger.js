// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Function to close the navigation menu
function closeNavMenu() {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
}

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// Event listener for the scroll event on the window
window.addEventListener('scroll', function() {
    // Close the navigation menu when the user scrolls
    closeNavMenu();
});