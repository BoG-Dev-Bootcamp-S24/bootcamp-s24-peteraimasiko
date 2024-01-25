const movediv = document.getElementById("moveable-div");
const togglebutton = document.getElementById("dark-light-toggle-button");
var lightmode = false;
var theme = localStorage.getItem("theme");
const body = document.body;
const details = document.querySelector(".details");
const d = body.querySelector("p");
const button = document.querySelectorAll("button");
const secret = document.getElementById("secret");



if (secret) {
    secret.addEventListener("input", anything = function(e){
        if (secret.value == "guitar") {
            const furret = document.createElement("img");
            const profile = document.querySelector(".profile")
            furret.src = "images/furret.gif";
            furret.classList.add("poke")
            const mypfp = document.querySelector(".pfp");
            furret2 = furret.cloneNode(false);
            // transform: scaleX(-1);
            furret2.style.transform = "scaleX(-1)";
            furret2.classList.add("poke2")
            profile.insertBefore(furret, mypfp);
            profile.appendChild(furret2);
            secret.removeEventListener("input", anything)
        }   
    });
}





if (theme == "light") {
    body.classList.toggle("body-light");
    details.classList.toggle("light-details");
    d.classList.toggle("light-p");
    button.forEach(element => {
        element.classList.toggle("light-button")
    });
    if (movediv) {
        movediv.classList.toggle("light-moveable-box")
    }
    togglebutton.innerHTML = ("Toggle dark mode");
    lightmode = true;
} else {
    togglebutton.innerHTML = ("Toggle light mode");
    lightmode = false;
}


togglebutton.addEventListener("click", () => {
    body.classList.toggle("body-light");
    details.classList.toggle("light-details");
    d.classList.toggle("light-p");
    button.forEach(element => {
        element.classList.toggle("light-button")
    });
    if (movediv) {
        movediv.classList.toggle("light-moveable-box")
    }

    if (!lightmode) {
        togglebutton.innerHTML = ("Toggle dark mode");
        lightmode = true;
        localStorage.setItem('theme', 'light');
    } else {
        togglebutton.innerHTML = ("Toggle light mode");
        lightmode = false;
        localStorage.setItem('theme', 'dark');
    }
    
    
});