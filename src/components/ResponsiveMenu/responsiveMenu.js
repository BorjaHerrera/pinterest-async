import './responsiveMenu.css';

export const responsiveMenu = () => {
  const menuButton = document.querySelector('#menu-button');
  const navList = document.querySelector('#nav-list');

  menuButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
      navList.style.display = 'block';
    } else {
      navList.style.display = 'none';
    }
  });
};
