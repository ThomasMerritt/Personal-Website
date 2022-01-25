const canvas = document.querySelector(".canvas");  
const slider = document.querySelector(".slider");  

const tl = new TimelineMax();


tl.fromTo(canvas,1.5, {height: "15%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(slider,1, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=.8");

let hamburger = document.getElementById('hamburger');
hamburger.classList.toggle('fade'); 