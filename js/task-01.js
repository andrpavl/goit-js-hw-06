console.log(`Number of categories: ${document.querySelectorAll('h2').length}`);

const categoriesList = document.querySelectorAll('#categories .item');

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const itemsQuantity = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsQuantity}`);
});

