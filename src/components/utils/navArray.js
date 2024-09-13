import { printGallery } from '../Gallery/gallery';

export const navArray = [
  {
    text: 'Inicio',
    href: '#',
    component: () => printGallery('surfing sunset')
  },
  {
    text: 'Explorar',
    href: '#',
    component: () => console.log('Explorar seleccionado')
  },
  {
    text: 'Crear',
    href: '#',
    component: () => console.log('Crear seleccionado')
  }
];
