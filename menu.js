let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const listClick = document.querySelector(".list")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

listClick.addEventListener("click", () => {
    

    menuSection.classList.toggle("on")
    document.body.style.overflow = "initial"
    /*window.location.reload();*/

    
   
}

)