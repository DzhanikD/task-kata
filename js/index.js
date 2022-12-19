import { request, debounce } from './serverRequest.js';
import { creatOfelem, creationOfItems, clearOfItems } from './creat.js';

const search = document.querySelector('.container__search');
const containerList = document.querySelector('.container__list');
let arrayOfRepo = [];

search.addEventListener('input', (ev) => {
  inputHandler(ev, arrayOfRepo);
});

document.addEventListener('click', (ev) => {
  let elemSearch = ev.target.closest('.container__item');
  let button = ev.target.closest('.button-remove');
  if (elemSearch) {
    clickElem(elemSearch, arrayOfRepo);
  }
  if (button) {
    buttonRemove(button);
  }
});

inputHandler = debounce(inputHandler, 500);

async function inputHandler(ev, arrayOfRepo) {
  if (ev.target.value) {
    let result = await request(ev.target.value);
    arrayOfRepo.length = 0;
    result.items.forEach((el) => arrayOfRepo.push(el));
    clearOfItems(containerList);
    creationOfItems(arrayOfRepo, containerList);
  } else {
    arrayOfRepo.length = 0;
    clearOfItems(containerList);
  }
}

function clickElem(elem, arrayOfRepo) {
  search.value = '';
  clearOfItems(containerList);
  let el = elem.dataset.num;
  let obj = arrayOfRepo[el];
  const searchResultWrappers = document.querySelectorAll(
    '.search-result__wrapper'
  );
  for (let items of searchResultWrappers) {
    if (items.dataset.id == obj.id) {
      alert('такой элемент уже добавлен!');
      return;
    }
  }
  creatOfelem(obj);
}

function buttonRemove(button) {
  let parent = button.closest('.search-result__wrapper');
  parent.remove();
}
