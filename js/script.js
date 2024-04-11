const slider1 = document.querySelectorAll(".slider1");

slider1.forEach((slide) =>{
    slide.addEventListener("click", () =>{
        removeActiveClass();
        slide.classList.add("active");
    });
});

function removeActiveClass(){
    slider1.forEach((slide) =>{
        slide.classList.remove("active")
    })
}