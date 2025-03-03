const nav = document.getElementById('nav');

function handleScroll() {
  const scrollPosition = window.scrollY;
  nav.classList.toggle('nav-dark', scrollPosition > 60);
}

window.addEventListener('scroll', handleScroll);