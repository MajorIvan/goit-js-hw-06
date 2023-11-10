function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContent = document.querySelector('#boxes');

const inputField = document.querySelector('input[type=number]');
const createBtn = document.querySelector('button[data-create]');
createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = inputField.value;
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
    size += 10;
  };

  boxContent.append(...boxes);
};

const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxContent.innerHTML = '';
};