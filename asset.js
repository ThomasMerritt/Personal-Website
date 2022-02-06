const canvas = document.querySelector(".canvas");  
const navlinks = document.querySelector(".nav-links");
let dream = document.getElementById('dream');
let slider = document.getElementById('slider');

const tl = new TimelineMax();

tl.fromTo(canvas,2, {height: "2%"}, {height: "80%", ease: Power3.easeInOut})
.fromTo(navlinks,.75, {height: "0%"}, {height: "8%", ease: Power1.easeInOut})

slider.classList.toggle('fade');
dream.classList.toggle('fade');