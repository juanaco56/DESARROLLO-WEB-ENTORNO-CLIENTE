function masaCorporal() {
    let centimetros = document.getElementById("cents").value;
    let kilos = document.getElementById("kg").value;
    let resultado = centimetros * centimetros / kilos;
    alert("El resultado es "+ resultado);
}