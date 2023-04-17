const counter = document.getElementById('counter');
const valueEl = document.getElementById('value');
let counterValue = 0;

counter.addEventListener('click', event => {
  const action = event.target.dataset.action;

  if (action === 'decrement') {
    counterValue -= 1;
  } else if (action === 'increment') {
    counterValue += 1;
  }

  valueEl.textContent = counterValue;
});