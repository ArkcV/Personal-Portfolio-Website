/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")


/* validate if constants exists */

/*show*/
if(navToggle){
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add("show-menu")
  })
}

/*hidden*/
if(navClose){
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove("show-menu")
  })
}





