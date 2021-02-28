const menuLinks = document.querySelector(".menu-links");
const toggleClose = document.querySelector(".toggle-close");
const toggleOpen = document.querySelector(".toggle-open");

const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".menu-links a");
const footer = document.querySelector("footer");
const btnToSite = document.querySelectorAll(".btn-to-site");

window.addEventListener("mousemove", cursor);

// Mousemove function 
function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

// Make the cursor circle grow on mouseover
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

/* Changing the color of the mouse on white or black background */
function mouseWhite() {
  mouseCursor.classList.add("mouse-white");
}

function mouseBlack() {
  mouseCursor.classList.remove("mouse-white");
}

footer.addEventListener("mouseover", mouseWhite);
footer.addEventListener("mouseleave", mouseBlack);
btnToSite.addEventListener("mouseover", mouseWhite);
btnToSite.addEventListener("mouseleave", mouseBlack);

// Toggle menu function 
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
