import cardList from '../menu.json'
import cardTemplate from '../template/template.hbs'

const menu = document.querySelector('.js-menu');
const cardMenu = makeMenuCard(cardList);

menu.insertAdjacentHTML('beforeend', cardMenu);

function makeMenuCard(cardList) {
    return cardList.map(cardTemplate).join('');
}
