const logged = localStorage.getItem('isLoggedIn');

if(!logged){
    location.pathname = 'index.html';
}

