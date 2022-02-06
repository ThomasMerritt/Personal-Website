const canvas = document.querySelector(".canvas");  
const slider = document.querySelector(".slider");  
const navlinks = document.querySelector(".nav-links");
let dream = document.getElementById('dream');

const tl = new TimelineMax();

tl.fromTo(canvas,2, {height: "10%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(navlinks,.75, {height: "0%"}, {height: "8%"})
.fromTo(slider,1.25, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=.8");

dream.classList.toggle('fade');