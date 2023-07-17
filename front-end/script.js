// Get our input reference.

function enviarDatos() {
  let emailField = document.getElementById("inputEmail4");
  let errorEmail = document.getElementById("errorEmail");
  let error = document.getElementById("error");
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // expresiones regulares en javascript

  // Using test we can check if the text match the pattern
 

  let nombre = document.getElementById("inputName").value;
  let apellido = document.getElementById("inputLastName").value;
  let contrasena = document.getElementById("inputPassword4").value;
  let correo = document.getElementById("inputEmail4").value;
  console.log(
    "nombre:",
    nombre,
    "apellido:",
    apellido,
    "contraseña:",
    contrasena,
    "correo:",
    correo
  );

  if (nombre === "" || apellido === "" || contrasena === "" || correo === "") {
    return error.textContent = "Todos los campos son obligatorios";
  } else if (!validEmail.test(emailField.value)) {
    return errorEmail.textContent = "El formato de correo es incorrecto";
  }

  fetch("http://localhost:8080/api/v1/createuser", {
    method: "POST",
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      contrasena: contrasena,
      correo: correo,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(function (response) {
      console.log({
        Origen: "Recibiendo respuesta de la API",
        status: response.status,
        statusText: response.statusText,
        response: response.text(),
      });
      if (response.status === 200) {
        document.getElementById("inputName").value = "";
        document.getElementById("inputLastName").value = "";
        document.getElementById("inputPassword4").value = "";
        document.getElementById("inputEmail4").value = "";
        alert("Usuario creado correctamente");
      } else {
        alert("Error al crear el usuario");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
