(async () =>{
const {value: Nombre}= await swal.fire({
    title: "Hola bienvenido a la familia ",
    html: "<p>INGRESA TU NOMBRE</p>",
    input: "text",
    color:"white",
    inputPlaceholder: "Nombre",
    confirmButtonText:"Adelante",
    background:"rgb(36, 36, 36)",
    footer:"si ya ingresaste tu nombre selecciona Adelante"
    
});

if (Nombre){
    swal.fire({
        title: "HOLA " + Nombre,
        html: "<p>TE DOY NUEVAMENTE LA BIENVENIDA</p>",
        confirmButtonText:"Adelante",
        background:"rgb(36, 36, 36)",
        color:"white"
    });

}

    
})()

