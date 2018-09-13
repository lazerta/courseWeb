let bar = document.querySelector(".fa-bars");
let nav = document.querySelector(".nav-bar");
let info = document.getElementById("getInfo");
let display = document.querySelector('.display');

info.addEventListener('click',() => {
    if(display.innerHTML === ""){
        display.innerHTML = navigator.appName;
    }else {
        display.innerHTML = "";
    }
});


bar.addEventListener("click", function() {
 nav.classList.toggle('ds');

});

