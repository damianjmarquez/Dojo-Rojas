
function login(){
    var usuario, contrasena
    usuario = document.getElementById("Usuario").value;
    contrasena = document.getElementById("Contrasena").value;

    if (usuario == "damian" && contrasena == "1234"){
        window.location.href = ("alum.html");
        swal.fire({
            title: "bienvenido"
        });
    }
    else{
        alert("datos incorrectos")
    }
}



function nComentario(){
    let li = document.createElement("li");
    let valoringresado = document.getElementById("nuevoComentario").value;
    let text = document.createTextNode(valoringresado);
    li.appendChild(text);

    if (valoringresado ===""){
        alert("Ingrese un comentario")

    }
    else{
        document.getElementById("Comentarios").appendChild(li);

    }

    document.getElementById("nuevoComentario").value ="";
    li.className = "comentario";

    let close = document.getElementsByName("close");
    let i;
    for (i = 0; i< close.length; i++)
        close[i].onclick =function(){
            let div = this.parentElement;
            div.style.display = "block";
        }    
}

//alumno


function abrir(){
    
    document.getElementById("info").style.display= "block";  
}

function cerrar(){
    
    document.getElementById("info").style.display= "none";  
}





function blanco(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Kihon Kata Ichiban.<br><br> Kihon Kata Niban.<br><br>Kihon Kata Sanban.<br><br>Fugiu Kata Daichi.<br><br>Naihanchi Yodan.</p>",
        color:"black",
        confirmButtonText: "volver",
        background: "white",
        
        grow:"fullscreen"
    });
}

