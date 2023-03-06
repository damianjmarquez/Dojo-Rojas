
function login(){
    var usuario, contrasena
    usuario = document.getElementById("Usuario").value;
    contrasena = document.getElementById("Contrasena").value;

    if (usuario == "damian" && contrasena == "1234"){
        window.location.href = ("alumno.html");
        alert("datos correctos")
    }
    else{
        alert("datos incorrectos")
    }
}


