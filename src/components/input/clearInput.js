import './input.css';

export const clearInput = () => {
  const inputDiv = document.querySelector('#search-button-container');
  const input = document.querySelector('#search-button');

  const clearButton = document.createElement('button');
  clearButton.id = 'clear-input';
  clearButton.className = 'hidden';
  clearButton.textContent = 'x';
  inputDiv.appendChild(clearButton);

  const buttonVisibility = () => {
    if (input.value.trim()) {
      clearButton.classList.remove('hidden');
      clearButton.id = 'clear-input';
    } else {
      clearButton.classList.add('hidden');
      clearButton.id = '';
    }
  };

  const clearInputValue = () => {
    input.value = '';
    buttonVisibility();
  };

  clearButton.addEventListener('click', clearInputValue);
  input.addEventListener('input', buttonVisibility);
};
