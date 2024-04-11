//copyright function
const year = document.getElementById('year');

function update(){
    const now = new Date();
    const out = now.getFullYear();

    year.innerHTML = out;
}
update();

//responsive navigation bar 

let menuBox = document.getElementById("menuBox")
let bar = document.getElementById('bar');
bar.onclick = function(){
    menuBox.classList.toggle("open-it");

    if(menuBox.classList.contains("open-it")){
        bar.src = './image/close.png';
    } else{
        bar.src = './image/menu.png';
    }
}
