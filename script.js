let menu = document.getElementById('header-sec');

let navBar = document.getElementById('nav-link');

let bars = document.getElementById('hamburger-1');

let close = document.getElementById('cross-1');

let logo = document.getElementById('logo-1');

bars.addEventListener('click', () => {
    bars.classList.add('hide-navbar-toggle');
    navBar.classList.toggle('open-nav');
    close.classList.toggle('active');
    logo.classList.add('logo-inactive');
})

close.addEventListener('click', () => {
  bars.classList.remove('hide-navbar-toggle')
  navBar.classList.toggle('open-nav')
  close.classList.toggle('active');
  logo.classList.remove('logo-inactive')
})

