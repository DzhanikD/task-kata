async function request(repo) {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${repo}&per_page=5`
  );
  const json = res.json();
  return json;
}

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

export { request, debounce };
