import foodCardTpl from '../templates/food-card.hbs';
import menu from '../data/menu.json';

const menuContainer = document.querySelector('.js-menu');

createMarkup(menu);

function createMarkup(el) {
  menuContainer.insertAdjacentHTML('beforeend', createMenuCardMarkup(el));
}

function createMenuCardMarkup(menu) {
  return menu.map(foodCardTpl).join('');
}