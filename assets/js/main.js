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

/*==================== REMOVE MOBILE MENU LINK ====================*/
const navLink = document.querySelectorAll(".nav_link")

function linkAction(){
  const navMenu = document.getElementById("nav-menu")
  
  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


/*==================== SKILLS ARROW OPEN Y CLOSE ====================*/

const skillsContent = document.getElementsByClassName("skills_content")
const skillsHeader = document.querySelectorAll(".skills_header")

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = "skills_content skills_close"
  }
  if(itemClass === "skills_content skills_close"){
    this.parentNode.className = "skills_content skills_open"
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener("click", toggleSkills)
})

/*==================== SLIDE PORTFOLIO ====================*/

