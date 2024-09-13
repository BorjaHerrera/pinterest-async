import { printGallery } from '../Gallery/gallery';
import './navLinks.css';

const logo = document.querySelector('#logo');

export const reset = (element) => {
  const input = document.querySelector('#search-button');
  const clearButton = document.querySelector('clear-input');

  element.addEventListener('click', () => {
    printGallery('surfing sunset');
    input.value = '';
    clearButton.classList.add('hidden');
    clearButton.id = '';
  });
};
