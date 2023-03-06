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