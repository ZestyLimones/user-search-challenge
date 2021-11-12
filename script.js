const usersEl = document.querySelector('#users');

const apiUrl = 'https://jsonplaceholder.typicode.com/';

const getUser = (e) => {
  const usersApi = `${apiUrl}users/`;

  fetch(usersApi).then((response) => {
    if (response.ok) {
      response.json().then((data) => {});
    }
  });
};
