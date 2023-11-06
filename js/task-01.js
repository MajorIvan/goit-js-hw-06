const categories = document.querySelectorAll('#categories .item');
const numberOfCategories = categories.length;

console.log('Number of categories:', numberOfCategories);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li');
    const numberOfItems = categoryItems.length;
  
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfItems}`);
  });