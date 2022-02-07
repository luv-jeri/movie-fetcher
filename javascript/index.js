const log = localStorage.getItem(
  'isLoggedIn'
);

if (log) {
  location.pathname = 'home.html';
}

const login = () => {
  const email =
    document.getElementById(
      'email'
    ).value; // Grab the email from the email input field and stored it in a variable

  const password =
    document.getElementById(
      'password'
    ).value; // Grab the password from the email input field and stored it in a variable

  // ! ERROR :  Check if the email and password are not empty
  if (email === '' || password === '') {
    alert(
      'Please provide  your email and password'
    );
    return;
  }

  if (
    email === 'sanjay@gmail.com' &&
    password === '1234'
  ) {
    //! Idea dropped
    // document.cookie =
    //   'isLoggedIn=true';

    localStorage.setItem(
      'isLoggedIn',
      'true'
    );

    //`  Redirect to the home page after successful login
    location.pathname = 'home.html';
  }
};

// Login button Listener
document
  .getElementById('login')
  .addEventListener('click', login); // Add an event listener to the login button
