import { links } from '../navLinks/navLinks';
import { navArray } from '../utils/navArray';

import './Header.css';

export const header = () => {
  const header = document.querySelector('#header');
  const logo = document.querySelector('#logo');
  const nav = document.querySelector('#nav');
  const navList = document.querySelector('#nav-list');
  const menuButton = document.querySelector('#menu-button');

  for (const element of navArray) {
    links(navList, element.text, element.href, element.component);
  }

  const input = document.querySelector('#search-button');
  const iconsDiv = document.querySelector('#icons');
  const bellIcon = document.querySelector('.bell-logo');
  const messageIcon = document.querySelector('.message-logo');
  const userIcon = document.querySelector('.user-logo');

  iconsDiv.appendChild(bellIcon);
  iconsDiv.appendChild(messageIcon);
  iconsDiv.appendChild(userIcon);
};
