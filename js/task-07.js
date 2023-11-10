const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `56px`;

fontSizeControl.addEventListener('input', handleInput);

function handleInput(event) {
  const fontSize = `${event.currentTarget.value}px`;
  text.style.fontSize = fontSize;
}