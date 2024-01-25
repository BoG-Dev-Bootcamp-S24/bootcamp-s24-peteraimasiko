let offset1 = movediv.style.left;
let offset2 = movediv.style.right;
let mousePX
let mousePY
let mousedown = false;

movediv.style.marginLeft = "auto"
movediv.style.marginRight = "auto"
movediv.addEventListener("mousedown", (e) => {
    mousedown = true;
    offset1 = movediv.offsetLeft - e.clientX
    offset2 = movediv.offsetTop - e.clientY
    
}, true);

document.addEventListener("mouseup", () => {
    mousedown = false;
}, true);

document.addEventListener("mousemove", (env) => {
    env.preventDefault();
    if (mousedown) {
        mousePX = env.clientX;
        mousePY = env.clientY;
        movediv.style.left = (mousePX + offset1) + 'px';
        movediv.style.top = (mousePY + offset2) + 'px';
        
    }
}, true);
