(async () =>{
const {value: Nombre}= await swal.fire({
    title: "Hola bienvenido a la falimia ",
    html: "<p>INGRESA TU NOMBRE</p>",
    input: "text",
    inputPlaceholder: "Nombre",
    
});

if (Nombre){
    swal.fire({
        title: "HOLA " + Nombre,
        html: "<p>TE SOY NUEVAMENTE LA VIENVENIDA</p>",

    });

}

    
})()

