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
