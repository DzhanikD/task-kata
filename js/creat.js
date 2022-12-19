const searchResult = document.querySelector('.search-result');

function creatOfelem(obj) {
  let buttonRemove = document.createElement('button');
  let searchResultElem = document.createElement('div');
  let searchResultWrapper = document.createElement('div');
  let name = document.createElement('div');
  let owner = document.createElement('div');
  let stars = document.createElement('div');
  name.classList.add('search-result__item');
  owner.classList.add('search-result__item');
  stars.classList.add('search-result__item');
  buttonRemove.classList.add('button-remove');
  searchResultWrapper.classList.add('search-result__wrapper');
  searchResultWrapper.setAttribute('data-id', obj.id);
  searchResultElem.classList.add('search-result__elem');
  buttonRemove.classList.add('button-remove');
  name.textContent = `Name: ${obj.name}`;
  owner.textContent = `Owner: ${obj.owner.login}`;
  stars.textContent = `Stars: ${obj.stargazers_count}`;
  searchResult.append(searchResultWrapper);
  searchResultWrapper.append(searchResultElem);
  searchResultWrapper.append(buttonRemove);
  searchResultElem.append(name);
  searchResultElem.append(owner);
  searchResultElem.append(stars);
}

function creationOfItems(array, list) {
  array.forEach((el, index) => {
    let li = document.createElement('li');
    li.classList.add('container__item');
    li.setAttribute('data-num', index);
    li.textContent = `${el.name}`;
    list.append(li);
  });
}

function clearOfItems(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

export { creatOfelem, creationOfItems, clearOfItems };
