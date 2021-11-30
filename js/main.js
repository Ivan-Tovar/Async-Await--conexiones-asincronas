let RegistrosHTML = document.getElementById('RegistrosHTML');
let arrayRegistros = [];

async function leeRegistros(){

    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();    
        
    return registros;
}

async function muestraRegistros(){
    try {
        arrayRegistros = await leeRegistros();
    } catch(e){
        console.log("Error generado: " + e);
    }
    console.log(arrayRegistros); 
    arrayRegistros.forEach(function(item, index){
        RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + item.Nombre + " " + item.Apellido +  " " + item.Telefono + "<br>";
    });
    //RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + arrayRegistros.nombre + " " + arrayRegistros.apellido;  
}

muestraRegistros();
