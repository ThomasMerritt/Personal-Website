const mine = document.querySelector(".mine");  
const slider = document.querySelector(".slider");  

const tl = new TimelineMax();


tl.fromTo(mine,1.5, {height: "15%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(slider,1, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=.8");

let hamburger = document.getElementById('hamburger');
hamburger.classList.toggle('fade'); 