document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect initialization
    var i = 0;
    var txt = 'Armin Esmaili'; /* The text */
    var speed = 200; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("ArminType").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(typeremover, 1000);
        }
    }

    function typeremover() {
        if (i > 0) {
            document.getElementById("ArminType").innerHTML = txt.substring(0, i - 1);
            i--;
            setTimeout(typeremover, speed);
        } else {
            setTimeout(typeWriter, 1000);
        }
    }

    // Start the typewriter effect
    typeWriter();

    // Navbar scroll effect
    var navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 200) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial check and scroll event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Image visibility on scroll
    function handleImageVisibility() {
        var image = document.getElementById('ArminPicture');
        var imagePosition = image.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        if (imagePosition < screenPosition) {
            image.classList.add('visible');
        }
    }

    // Check image visibility on scroll and on page load
    window.addEventListener('scroll', handleImageVisibility);
    handleImageVisibility();

    // Initialize AOS (Animate on Scroll)
    AOS.init();
});
