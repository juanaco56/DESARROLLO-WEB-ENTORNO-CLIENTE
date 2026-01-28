window.onload = function () {

    const superior = document.getElementById("superior");
    const inferior = document.getElementById("inferior");
    const contenedor = document.getElementById("contenedor-personajes");

    // BOTÓN GENERAR PERSONAJE
    const btnGenerar = document.createElement("button");
    btnGenerar.textContent = "Generar mugiwara";
    superior.appendChild(btnGenerar);

    btnGenerar.onclick = function () {
        let opcion = prompt(
            "Elija el nombre del mugi:\n" +
            "1. Sanji\n2. Zoro\n3. Nami\n4. Luffy \n (Escribe el nombre por favor)."
        );

        let img = document.createElement("img");
        img.className = "personaje";

        switch (opcion.toLowerCase()) {
            case "sanji":
                img.src = "img_onepiece/sanji.png";
                img.alt = "Sanji";
                break;
            case "zoro":
                img.src = "img_onepiece/zoro.png";
                img.alt = "Zoro";
                break;
            case "nami":
                img.src = "img_onepiece/nami.png";
                img.alt = "Nami";
                break;
            case "luffy":
                img.src = "img_onepiece/luffy.png";
                img.alt = "Luffy";
                break;
            default:
                alert("Opción no válida");
                return;
        }

        contenedor.appendChild(img);
    };

    // BOTÓN BORRAR PERSONAJE
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar mugiwara";
    superior.appendChild(btnBorrar);

    btnBorrar.onclick = function () {
        let imagenes = contenedor.getElementsByTagName("img");
        if (imagenes.length > 0) {
            contenedor.removeChild(imagenes[imagenes.length - 1]);
        } else {
            alert("No hay mugiwaras para borrar");
        }
    };

    // BOTONES DE CONTAR PERSONAJES
    crearBotonContar("Numero del mejor cocinero de todo el East Blue(mi 3o fav de la serie)", "Sanji");
    crearBotonContar("Numero de RORONOA.ZRO", "Zoro");
    crearBotonContar("Numero de Nami SWAAAAN", "Nami");
    crearBotonContar("Numero de Monkeys (como yo) D. Luffy", "Luffy");

    function crearBotonContar(texto, personaje) {
        let boton = document.createElement("button");
        boton.textContent = texto;
        inferior.appendChild(boton);

        boton.onclick = function () {
            let imagenes = contenedor.getElementsByTagName("img");
            let contador = 0;

            for (let img of imagenes) {
                if (img.alt === personaje) {
                    contador++;
                }
            }

            alert("Número de imágenes de " + personaje + ": " + contador);
        };
    }
};
