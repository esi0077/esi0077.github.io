


var i = 0;
var txt = 'Armin Esmaili'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("ArminType").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Wait for a while before starting the removal
        setTimeout(typeremover, 1000);
    }
}

function typeremover() {
    if (i > 0) {
        document.getElementById("ArminType").innerHTML = txt.substring(0, i - 1);
        i--;
        setTimeout(typeremover, speed);
    } else {
        // Wait for a while before starting the typing again
        setTimeout(typeWriter, 1000);
    }
}

// Start the loop when the window loads
window.onload = function() {
    typeWriter();
};







 // script.js

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 200) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check in case the page is already scrolled
    handleScroll();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
});
