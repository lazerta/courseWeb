let navbar =document.querySelector('.nav-bar');
let target = document.querySelector(".fa-bars");
let hidden = document.querySelector(".nav-hidden");
let vis = navbar.style.visibility;
target.addEventListener('clcik',function(){
 if(vis === 'hidden' ) vis = 'visible';
 vis = 'hidden'; 
});
alert('msg');

