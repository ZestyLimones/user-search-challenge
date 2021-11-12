const usersEl = $('#users');

const apiUrl = 'https://jsonplaceholder.typicode.com/';

const displayUsers = (users) => {
  users.forEach((element) => {
    let name = element.name;

    let addUserContainer = $('<tr>');
    addUserContainer.attr('class', 'user-container');
    let addUserName = $('<td>');
    addUserName.text(name);

    addUserName.appendTo(addUserContainer);
    addUserContainer.appendTo(usersEl);
  });
};

const getUsers = (e) => {
  const usersApi = `${apiUrl}users/`;

  fetch(usersApi).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        displayUsers(data);
      });
    }
  });
};

getUsers();
