import foodCardTpl from '../templates/food-card.hbs';
import filterTpl from '../templates/filter.hbs';
import menu from '../data/menu.json';

const menuContainer = document.querySelector('.js-menu');
const filter = document.querySelector('.filter');

filter.insertAdjacentHTML('beforeend', createFilterMarkup(menu));

filter.addEventListener('click', onFilterButtonClick);

createMarkup(menu);

function createMarkup(el) {
  menuContainer.insertAdjacentHTML('beforeend', createMenuCardMarkup(el));
}

function createMenuCardMarkup(menu) {
  return menu.map(foodCardTpl).join('');
}

function createFilterMarkup(menu) {
  const array = menu
    .reduce((acc, value) => [...acc, ...value.ingredients], [])
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();

  return filterTpl(array);
}

function onFilterButtonClick(e) {
  if (!e.target.classList.contains('filter-button')) {
    return;
  }

  const value = e.target.textContent;
  let result = [];

  if (value === 'Все ингридиенты') {
    menuContainer.innerHTML = '';
    createMarkup(menu);
  } else {
    result = menu.filter(el => el.ingredients.includes(value));
    menuContainer.innerHTML = '';
    createMarkup(result);
  }

  result = [];
}
