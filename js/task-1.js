const categoryCount = document.querySelectorAll('#categories .item').length;
console.log('Number of categories:', categoryCount);

document.addEventListener('DOMContentLoaded', function () {
  const categoryItems = document.querySelectorAll('#categories .item');

  categoryItems.forEach(function (item) {
    const title = item.querySelector('h2').textContent;

    const itemList = item.querySelectorAll('ul li');

    console.log('Category:', title);
    console.log('Elements:', itemList.length);
  });
});