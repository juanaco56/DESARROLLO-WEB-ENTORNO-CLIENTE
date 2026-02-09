function realizarOperacion() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let operacion = document.getElementById("select").value;
    let resultado;

    if (operacion === "sumar") {
        resultado = n1 + n2;

    } else if (operacion === "restar") {
        resultado = n1 - n2;

    } else if (operacion === "multiplicar") {
        resultado = n1 * n2;

    } else if (operacion === "dividir") {
        if (n2 === 0) {
            document.getElementById("resultado").innerHTML = "No se puede dividir por 0!";
            return; 
        } else {
            resultado = n1 / n2;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}
