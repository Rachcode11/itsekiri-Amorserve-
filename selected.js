const spans = document.querySelectorAll('.available span');

console.log(spans, "uuuuuuuuuuuuuuu");

    

spans.forEach(span => {
  span.addEventListener('click', function() {
    spans.forEach(s => s.classList.remove('selected'));
    this.classList.add('selected');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutNavItem = document.getElementById("about");
  const aboutSection = document.querySelector(".nav_section");

  if (aboutNavItem && aboutSection) {
      aboutNavItem.addEventListener("click", function() {
          window.scrollTo({
              top: aboutSection.offsetTop - 50, 
              behavior: "smooth"
          });

  
          const navItems = document.querySelectorAll(".top_nav .list li");
          navItems.forEach(item => {
              item.classList.remove("selected");
          });
          aboutNavItem.classList.add("selected");
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutNavItem = document.getElementById("culture");
  const aboutSection = document.querySelector(".upcoming");

  if (aboutNavItem && aboutSection) {
      aboutNavItem.addEventListener("click", function() {
          // Scroll to the top of the aboutSection
          window.scrollTo({
              top: aboutSection.offsetTop - 50, // Adjust offset as needed
              behavior: "smooth"
          });

          // Optionally, toggle a 'selected' class on the clicked nav item
          // and remove 'selected' class from other nav items
          const navItems = document.querySelectorAll(".top_nav .list li");
          navItems.forEach(item => {
              item.classList.remove("selected");
          });
          aboutNavItem.classList.add("selected");
      });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const aboutNavItem = document.getElementById("gallery");
  const aboutSection = document.querySelector(".update");

  if (aboutNavItem && aboutSection) {
      aboutNavItem.addEventListener("click", function() {
          window.scrollTo({
              top: aboutSection.offsetTop - 50, 
              behavior: "smooth"
          });

 
          const navItems = document.querySelectorAll(".top_nav .list li");
          navItems.forEach(item => {
              item.classList.remove("selected");
          });
          aboutNavItem.classList.add("selected");
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutNavItem = document.getElementById("volunteer");
  const aboutSection = document.querySelector(".volunteer");

  if (aboutNavItem && aboutSection) {
      aboutNavItem.addEventListener("click", function() {
          window.scrollTo({
              top: aboutSection.offsetTop - 50, 
              behavior: "smooth"
          });

          const navItems = document.querySelectorAll(".top_nav .list li");
          navItems.forEach(item => {
              item.classList.remove("selected");
          });
          aboutNavItem.classList.add("selected");
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutNavItem = document.getElementById("contact");
  const aboutSection = document.querySelector(".contact");

  if (aboutNavItem && aboutSection) {
      aboutNavItem.addEventListener("click", function() {
          window.scrollTo({
              top: aboutSection.offsetTop - 50, 
              behavior: "smooth"
          });


          const navItems = document.querySelectorAll(".top_nav .list li");
          navItems.forEach(item => {
              item.classList.remove("selected");
          });
          aboutNavItem.classList.add("selected");
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("emailInput");
  const subscribeButton = document.getElementById("subscribeButton");

  if (subscribeButton && emailInput) {
      subscribeButton.addEventListener("click", function(event) {
          event.preventDefault();

          const email = emailInput.value.trim();

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailPattern.test(email)) {
              console.log("Valid email:", email);
 alert("Thank you for subscribing!");
              emailInput.value = "";
          } else {
              alert("Please enter a valid email address.");
          }
      });
  }
});
