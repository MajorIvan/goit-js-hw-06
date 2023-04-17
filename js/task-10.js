function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector('#controls');
const inputEl = controlsDiv.querySelector('input[type="number"]');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    const size = initialSize + i * 10;
    boxEl.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(boxEl);
  }

  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}