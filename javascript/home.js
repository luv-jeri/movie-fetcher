const logged = localStorage.getItem(
  'isLoggedIn'
);

if (!logged) {
  location.pathname = 'index.html';
}

fetch(
  'https://reqres.in/api/users?page=2'
)
  .then((res) => {
    res.json().then((data) => {
      data.data.forEach((element) => {
        const div =
          document.createElement('div');

        div.innerHTML = `
            <div>${element.first_name} ${element.last_name}</div>
            `;
        document
          .getElementById('list')
          .appendChild(div);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
