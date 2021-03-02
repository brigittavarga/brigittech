const menuLinks = document.querySelector(".menu-links");
const toggleClose = document.querySelector(".toggle-close");
const toggleOpen = document.querySelector(".toggle-open");


// Toggle nav function 
function toggleFunction() {
  if (menuLinks.style.opacity === "1") {
    menuLinks.style.opacity = "0";
    toggleOpen.style.opacity = "1";
    toggleClose.style.opacity = "0";
  } else {
    menuLinks.style.opacity = "1";
    toggleOpen.style.opacity = "0";
    toggleClose.style.opacity = "1";
  }
}