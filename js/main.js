let arrayregistros= [];

//Cominucacion con el servidor 
async function LeeRegistros(nombre){

    const respuesta= await fetch("http://api-rest.mvlwver3.online/index.php?nombre=Ivan&apellido=Tovar");
    const registros = await respuesta.json();

    return registros;
}

async function muestraRegistros(){
   try{
        arrayregistros =  await LeeRegistros();
   }
   catch (e){
       console.log("Error generado: " + e);
   }

   console.log(arrayregistros);
}

muestraRegistros();
