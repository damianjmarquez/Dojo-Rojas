
function login(){
    var usuario, contrasena
    usuario = document.getElementById("Usuario").value;
    contrasena = document.getElementById("Contrasena").value;

    if (usuario == "DOJOROJAS" && contrasena == "DJM39"){
        window.location.href = ("alum.html");
        alert("excelente precione aceptar")
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
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera",
        
        
    });
}

function celeste(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Fugiu Kata Daini.<br><br> Naihanchi Niban.<br><brNaihanchi Sanban.</p>",
        color:"black",
        confirmButtonText: "volver",
        background: "rgb(0, 247, 255)",
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera",
         
    });
}

function amarillo(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Piñan Ichiban o Yodan.<br><br> Piñan Niban.</p>",
        color:"black",
        confirmButtonText: "volver",
        background: "yellow",
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera",
         
    });
}

function naranja(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Piñan Sanban.<br><br> Piñan Yondan.</p>",
        color:"black",
        confirmButtonText: "volver",
        background: "orange",
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera",
        
    });
}

function verde(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Piñan Godan.</p>",
        color:"black",
        confirmButtonText: "volver",
        background: "green",
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera",
         
    });
}

function azul(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Kusanku Sho.</p>",
        color:"black",
        confirmButtonText: "volver",
        background: "blue",
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera", 
    });
}

function marron(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Itosu No Passai. Passai Sho.</p>",
        color:"black",
        confirmButtonText: "volver",
        background: "brown",
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera",
        
    });
}

function negro(){
    swal.fire({
        title: "PREPARA BIEN ",
        html: "<p>Matsumura No Passai. <br><br>Passai Dai.<br><br>Chinto.</p>",
        color:"white",
        confirmButtonText: "volver",
        background: "black",
        confirmButtonText:"Volver",
        footer:"Sigue adelante prospera",
        
        
       
    });
}

