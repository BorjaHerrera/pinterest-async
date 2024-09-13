import { printGallery } from './src/components/Gallery/gallery';
import { header } from './src/components/header/Header';
import { clearInput } from './src/components/input/clearInput';
import { searchInput } from './src/components/input/searchInput';
import { reset } from './src/components/navLinks/resetButton';
import { responsiveMenu } from './src/components/ResponsiveMenu/responsiveMenu';

import './style.css';

const divApp = document.querySelector('#app');

divApp.innerHTML = `
  <header id="header">
    <img src="./assets/pinterest.png" alt="pinterest-logo" id="logo" />
    <nav id="nav">
          <button id="menu-button" aria-label="Toggle menu">☰</button>
      <ul id="nav-list"></ul>
      </nav>
    <div id="search-button-container">
    <input type="text" placeholder="Buscar..." id="search-button">
    </div>
    <div id="icons">
      <img src="./assets/bell_icon.png" alt="icono de notificaciones" class="bell-logo" />
      <img src="./assets/message_icon.png" alt="icono de mensajes" class="message-logo" />
      <img src="https://i.pinimg.com/280x280_RS/4f/99/3f/4f993fe8b54de837c18e9fb4893767d7.jpg" 
           alt="perfil de usuario" class="user-logo" />
    </div>
  </header>
  <main id="main"></main>  
  <footer id="footer">
        <p>Creativity is contagious, pass it on. Designed with patience and love. Copyright © 2024</p>
</footer>
`;
responsiveMenu();
header();
clearInput();
printGallery('surfing sunset');
searchInput();
reset(logo);
