const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.value = parseInt(window.getComputedStyle(text).fontSize);

fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = fontSizeControl.value + 'px';
});