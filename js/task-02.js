const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

function createMarkup(arr) {
  
  const markup = arr.map ( item => {
    const li = document.createElement('li');
    li.textContent = item;

    li.classList.add('item');

    return li;
  });

  ul.append(...markup);
}

createMarkup(ingredients);