let theme = document.getElementById('theme');

theme.onchange = () => {
  if (localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  
}

window.onload = () => {
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    localStorage.setItem('theme', 'light');
  } else {
    if (currentTheme === 'light') {
      theme.attributes[0].ownerElement.checked = false;
    } else {
      theme.attributes[0].ownerElement.checked = true;
    }
  }
}

// Active menue on scrolling
const sections = document.querySelectorAll("h2");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset + 500 >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// Go to top 
// Get the button
let up = document.getElementById("up");

up.onclick = () => { topFunction(); };

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    up.classList.add('show');
  } else {
    up.classList.remove('show');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}