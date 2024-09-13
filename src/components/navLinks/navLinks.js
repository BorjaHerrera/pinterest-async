import './navLinks.css';

export const links = (parentElement, text, href, component) => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.textContent = text;
  a.href = href;
  li.appendChild(a);

  a.addEventListener('click', component);
  a.addEventListener('click', () => {
    const input = document.querySelector('#search-button');
    const clearButton = document.querySelector('button');
    input.value = '';
    clearButton.classList.add('hidden');
    clearButton.id = '';
  });

  parentElement.appendChild(li);
};
