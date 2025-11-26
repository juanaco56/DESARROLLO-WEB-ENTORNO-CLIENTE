let paises = [
    "España",
    "Portugal",
    "Francia",
    "Chile",
    "Venezuela",
    "Colombia",
    "Alemania",
    "China",
    "Japón",
    "Corea"
];

    let respuesta = prompt("Escoge una de las siguientes opciones\n 1. Mostrar número de paises\n 2. Mostrar listado de paises\n3. Mostrar un intervalo de paises \n4. Añadir un pais \n5. Borrar un pais \n 6. Consultar un pais \n Cualquier otro numero: Salir.");
    switch(respuesta) {
        case 1:
            function mostrarNumero(){
                windows.onload(paises.length + " es la cantidad de paises");
            }
    }

/*
windows.onload = function mostrarNumeroPaises(){
    paises.length() = document.getElementById("numeroPaises").innerHTML;
}

function listadoPaises(){
    for (let i = 0; i < paises.length(); i++) {
        paises[i] = document.getElementById("paisesOrdenados").innerHTML + "</br>";
    }
    let respuesta = document.getElementById("opcionOrdenado");
    switch(respuesta){
        case 1:
            for (let i = 0; i < paises.length(); i++) {
                paises[i] = document.getElementById("paisesOrdenados").innerHTML + "</br>";
            }
        case 2:
            paises.reverse();
            for (let i = 0; i < paises.length(); i++ ) {
                paises[i] = document.getElementById("paisesOrdenados").innerHTML + "</br>";
            }

        case 3:
            paises.sort();
            for (let i = 0; i < paises.length(); i++) {
                paises[i] = document.getElementById("paisesOrdenados").innerHTML + "</br>";
            }
        default:
            "Introduce una forma de ordenarlas!" = document.getElementById("paisesOrdenados").innerHTML;
    }
}


function mostrarIntervalo() {
    
    let final = parseInt(document.getElementById("final").value);
    for(let inicio = parseInt(document.getElementById("inicio").value); inicio < final; inicio++) {
        paises[inicio] = document.getElementById("mostarIntervalo").innerHTML + "<br/>";
    }
}


function anadirPais() {
    let pais = document.getElementById("nuevoPais").value;
    let respuesta = document.getElementById("opcionAnadir").value;
    switch(respuesta) {
        case 1:
            paises.push(pais);
            "Pais añadido con éxito" = document.getElementById("resultadoAnadir").innerHTML;
        case 2:
            paises.unshift(pais);
            "Pais añadido con éxito" = document.getElementById("resultadoAnadir").innerHTML;
        default:
            "Escoge una opción antes de añadir!" = document.getElementById("resultadoAnadir").innerHTML;
    }
}


function borrarPais() {
    let pais = document.getElementById("paisEliminado").value;
    let respuesta = document.getElementById("opcionBorrar").value;
    for (let i = 0; i < paises.length(); i++) {
        if (paises[i] === pais) {
            switch(respuesta) {
                case 1:
                    paises.pop(pais);
                    "Pais borrado con éxito" = document.getElementById("resultadoBorrar").innerHTML;
                case 2:
                    paises.shift(pais);
                    "Pais borrado con éxito" = document.getElementById("resultadoBorrar").innerHTML;
                default:
                    "Escoge una opción antes de añadir!" = document.getElementById("resultadoBorrar").innerHTML;
            }
        }else {
            "País no encontrado, no se puede eliminar" = document.getElementById("resultadoBorrar").innerHTML;
        }
    }
    
    
}

function consultarPais() {
    let 
}
    */