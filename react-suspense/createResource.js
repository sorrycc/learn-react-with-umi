import wrapPromise from "./wrapPromise";

function fetchPerson() {
  return fetch('https://randomuser.me/api')
    .then(x => x.json())
    .then(x => x.results[0]);
}

function getNum() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
}

export default function createResource() {
  return {
    person: wrapPromise(fetchPerson()),
    num: wrapPromise(getNum()),
  };
}
