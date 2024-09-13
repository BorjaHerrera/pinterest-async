import './gallery.css';

import { api } from '../utils/API';

export const printGallery = async (query) => {
  const gallery = await api(query);

  const main = document.querySelector('#main');
  main.innerHTML = '';
  const sectionGallery = document.createElement('section');
  sectionGallery.className = 'gallery-container';

  for (const image of gallery) {
    sectionGallery.innerHTML += `
      <div class="gallery">
        <img class="img-api" src="${image.urls.regular}" alt="${image.description}">
      </div>`;
  }
  main.appendChild(sectionGallery);

  if (!gallery || gallery.length === 0) {
    const noResultsContainer = document.createElement('div');
    noResultsContainer.className = 'no-results-container';
    noResultsContainer.innerHTML =
      '<p class="no-results">Siempre estamos añadiendo nuevas ideas, pero no hemos encontrado ningún Pin para esta búsqueda. Lo sentimos.</p>';
    main.appendChild(noResultsContainer);
  }
};
