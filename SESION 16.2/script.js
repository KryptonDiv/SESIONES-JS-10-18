const url = 'http://localhost:9000/api/users'

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}


function getUser(id) {
    fetch(`http://localhost:9000/api/users/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}



getUsers();
getUser("639cdaeac19403bef95f3a8a");



