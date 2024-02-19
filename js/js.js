document.addEventListener('DOMContentLoaded', function () {
    // Get references to the slides
    const main = document.querySelector('.main');
    const main2 = document.querySelector('.main2');
    const homePage = document.querySelector('.HomePage');

    // Initially hide the second slide
    main2.style.display = 'none';

    // Function to toggle between slides and change background
    function toggleSlides() {
        if (main.style.display === 'block') {
            main.style.display = 'none';
            main2.style.display = 'block';
            homePage.style.backgroundImage = "url('/img/spider-man-no-way-home-2021-chelovek-pauk-net-puti-domoi-ben.jpg')";
        } else {
            main.style.display = 'block';
            main2.style.display = 'none';
            homePage.style.backgroundImage = "url('https://images7.alphacoders.com/131/1319721.jpeg')";
        }
    }

    // Toggle slides every 3 seconds
    setInterval(toggleSlides, 6000);
});


document.addEventListener('DOMContentLoaded', function () {
    const moviesLink = document.getElementById('moviesLink');
    const moviesSection = document.getElementById('movies');

    moviesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        moviesSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to movies section
    });
});

const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    // Check the scroll position
    if (window.scrollY > 50) { // Change '50' to the desired scroll threshold
        // If scrolled down, add a class to the header to change its background color
        header.classList.add('scrolled');
    } else {
        // If not scrolled down, remove the class to revert to the original background color
        header.classList.remove('scrolled');
    }
});