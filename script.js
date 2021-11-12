const usersEl = $('#users');
const postsEl = $('#user-posts')

const apiUrl = 'https://jsonplaceholder.typicode.com/';

const displayUsers = (users) => {
  users.forEach((element) => {
    let name = element.name;

    let addUserContainer = $('<tr>');
    addUserContainer.attr('class', 'user-container');
    let addUserName = $('<td>');
    addUserName.attr('class', 'user').text(name);

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

const displayPosts(postData) {
    postData.forEach((element) => {
        let postTitle = element.title;
        let postBody = element.body;

        let addPostContainer = $('<div>');
        addPostContainer.attr('class', 'container post-container');
        let addTitle = $('<h3>');
        addTitle.text(postTitle);
        let addBody = $('<p>');
        addBody.text(postBody);

        addTitle.appendTo(addPostContainer);
        addBody.appendTo(addPostContainer);
        addPostContainer.appendTo(postsEl)

    })
}

const getPosts = (user) => {
  let posts = `${apiUrl}posts/${userId}`;

  fetch(posts).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        diplayPosts(data);
      });
    }
  });
};

getUsers();
