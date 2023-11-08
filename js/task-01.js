const categories = document.querySelectorAll('#categories .item');
const quantityOfCategories = categories.length;

console.log('Number of categories:', quantityOfCategories);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li');
    const quantityOfItems = categoryItems.length;
  
    console.log('');
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${quantityOfItems}`);
  });