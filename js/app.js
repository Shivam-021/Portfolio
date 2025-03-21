let toggle = document.querySelector(".nav-toggler")
let menu = document.querySelector(".aside")

var check=0

toggle.addEventListener("click", function(){
  if(check==0){
    menu.style.left="0px"
    menu.style.zIndex="10000"
    check=1
  }else{
    menu.style.left="-270px"
    check=0
  }
})

window.addEventListener("scroll", function () {
  if (check === 1) {
      menu.style.left = "-270px";
      check = 0;
  }
});


// nav links are active on sections scrolling effects
// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

// Create IntersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach((link) => link.classList.remove("active"));
                // Add active class to the corresponding link
                const activeLink = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
                activeLink.classList.add("active");
            }
        });
    },
    {
      threshold: 0.2, // Adjust as needed (0.5 means 50% of the section is visible)
    }
);

// Observe each section
sections.forEach((section) => observer.observe(section));
