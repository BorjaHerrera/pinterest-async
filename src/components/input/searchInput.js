import { printGallery } from '../Gallery/gallery';
import './input.css';

export const searchInput = () => {
  const input = document.querySelector('#search-button');

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      printGallery(input.value.trim());
    }
  });
};
