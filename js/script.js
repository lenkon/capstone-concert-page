const header = document.getElementById('header-container');
const menu = document.getElementById('hamburger-menu');
const menuShow = document.getElementById('menu-show');
const mainBody = document.getElementById('main');
const menuClose = document.getElementById('menu-close');
const menuList = document.querySelectorAll('.menu-item');

// Mobile menu
const openMenu = () => {
  menuShow.classList.add('show-menu');
  menuShow.style.display = 'block';
  header.classList.add('blur-filter');
  menu.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');
};

const closeMenu = () => {
  menuShow.classList.remove('show-menu');
  menuShow.style.display = 'none';
  header.classList.remove('blur-filter');
  menu.classList.remove('blur-filter');
  mainBody.classList.remove('blur-filter');
};

menu.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

menuList.forEach((item) => {
  item.addEventListener('click', closeMenu);
});