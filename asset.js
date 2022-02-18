const canvas = document.querySelector(".canvas");  
const navlinks = document.querySelector(".nav-links");
let caption = document.getElementById('caption');
let slider = document.getElementById('slider');
const tl = new TimelineMax();

tl.fromTo(canvas,2, {height: "0%"}, {height: "80%", ease: Power3.easeInOut})
.fromTo(navlinks,.75, {height: "0%"}, {height: "8%", ease: Power1.easeInOut})

slider.classList.toggle('fade');
caption.classList.toggle('fade');

window.onload = function() {
    const CONTAINER = document.querySelector('.container')

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if (window.scrollY >= 150) {
            CONTAINER.style.opacity = '1';
            CONTAINER.style.transform = 'translateX(0px)';
            CONTAINER.style.transition = '1s ease-in-out';
        } else {
            CONTAINER.style.opacity = '0';
            CONTAINER.style.transform = 'translate(-20px)';
        }
    }
    scrollEffect();
} 