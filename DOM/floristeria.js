window.onload = function() {

    const controlesSuperiores = document.getElementById("superior");
    const controlesInferiores = document.getElementById("inferior");
    const cuerpoTabla = document.getElementById("cuerpoTabla");

    // Botón Generar planta
    const btnGenerar = document.createElement("button");
    btnGenerar.textContent = "Generar planta";
    controlesSuperiores.appendChild(btnGenerar);

    btnGenerar.onclick = function() {
        let nombre = prompt("Introduce el nombre de la planta:");
        let ubicacion = prompt("Introduce la ubicación:");
        let ejemplares = prompt("Introduce el número de ejemplares:");
        let flor = prompt("¿Tiene flor? (Sí/No):");

        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${ubicacion}</td>
            <td>${ejemplares}</td>
            <td>${flor}</td>
        `;

        cuerpoTabla.appendChild(fila);
    };

    // Botón Borrar fila
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar fila";
    controlesSuperiores.appendChild(btnBorrar);

    btnBorrar.onclick = function() {
        let filas = cuerpoTabla.getElementsByTagName("tr");
        if (filas.length > 0) {
            cuerpoTabla.removeChild(filas[filas.length - 1]);
        } else {
            alert("No hay filas para borrar.");
        }
    };

    // Botón Contar filas
    const btnContar = document.createElement("button");
    btnContar.textContent = "Mostrar número de filas";
    controlesInferiores.appendChild(btnContar);

    btnContar.onclick = function() {
        let numeroDeFilas = cuerpoTabla.getElementsByTagName("tr").length;
        alert("Número total de plantas introducidas: " + numeroDeFilas);
    };
};
