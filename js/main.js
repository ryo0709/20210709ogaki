'use strict';
const target = document.getElementById('menu');
target.addEventListener('click', () => {
  const target = document.getElementById('menu');
  target.classList.toggle('open');
  const drawerNav = document.getElementById('drawerNav');
  drawerNav.classList.toggle('in')
  const logo = document.getElementById('logo');
  logo.classList.toggle('of')
});