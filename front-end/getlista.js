

const lista = document.getElementById("lista");

fetch("http://localhost:8080/api/v1/getallusers")
.then(response => response.json())
.then(json => {
    console.log(json);
    for(let i = 0; i < json.length; i++) {
        addUser(json[i]);
        console.log(json[i]);
    }
})
.catch(error => console.log("Error en la petición", error));

function addUser(user) {
    const inyectarHTML = 
    '<div class="col-lg-6"' +
    '<div class="card">' +
    '<div class="card-body"' + '>' +
    '<p>' + user.status + '</p>' +
    '<h3 class="card-title">' + user.name + ' ' + user.lastName + '</h3>' +
    '<p class="card-text">' + user.email + '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<br/>';
    lista.innerHTML += inyectarHTML;
}