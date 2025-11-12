function masaCorporal() {
    
    let centimetros = document.getElementById("cents").value;
    let kilos = document.getElementById("kg").value;
    let metros = centimetros / 100; 
    let resultado = kilos / (metros ** 2); 
    let clasificacion;
    
    if(resultado < 16.00){
        clasificacion = "Infrapeso (delgadez severa)";
    } else if(resultado >= 16.00 && resultado < 17.00){
        clasificacion = "Infrapeso (delgadez moderada)";
    }else if(resultado >= 17.00 && resultado < 18.50){
        clasificacion = "Infrapeso (delgadez aceptable)";
    }else if(resultado >=18.50 && resultado < 25){
        clasificacion = "Peso normal";
    }else if(resultado >=25 && resultado < 30) {
        clasificacion = "Sobrepreso";
    }else if(resultado >= 30 && resultado < 35){
        clasificacion = "Obeso (Tipo I)";
    }else if(resultado >=35 && resultado <=40) {
        clasificacion = "Obeso (Tipo II)";
    }else if(resultado > 40){
        clasificacion = "Obeso(Tipo III)";
    }else{
        clasificacion = "ERROR";
    }

    document.getElementById("resultado1").innerHTML = "El resultado de tu IMC es: " + resultado.toFixed(2) +". Tu clasificación por peso es:  <strong>" + clasificacion + "</strong";
    
}

function frecuenciaCardiaca(){
    let edad = parseInt(document.getElementById("edad").value);
    resultado_m = 220 - edad;
    resultado_f = 216 - edad;
    if(isNaN(edad)) {
        document.getElementById("resultado2").innerHTML = "Error, introduce un número";
    }
    if(document.getElementById("sexo").value === "M"){
        if(resultado_m < 0 || resultado_m > 220){
            document.getElementById("resultado2").innerHTML = "Error, números incorrectos";
        }else{
            document.getElementById("resultado2").innerHTML = "El resultado de tu FCM es: " + resultado_m;
        }
    }else if(document.getElementById("sexo").value === "F"){
        if(resultado_f < 0 || resultado_f > 216){
                document.getElementById("resultado2").innerHTML = "Error, números incorrectos";
        }else{
                document.getElementById("resultado2").innerHTML = "El resultado de tu FCM es: " + resultado_f;
        }

    }

    

}

function categoria(){
    let anoNacimiento = parseInt(document.getElementById("anoNacimiento").value);
    if(isNaN(anoNacimiento) || anoNacimiento < 1900 || anoNacimiento > 2025) {
        document.getElementById("resultado3").innerHTML = "Por favor, verifica los creedenciales introducidos(alos entre 1900 y 2025 y que no esté vacio)";
    } else {
        let categoria = 2025 - anoNacimiento;
        if(categoria === 4 || categoria === 5) {
            document.getElementById("resultado3").innerHTML = "Eres Pre-Chupetin " + anoNacimiento;
        }else if(categoria === 6 || categoria === 7){
            document.getElementById("resultado3").innerHTML = "Eres Pre-Benjamin " + anoNacimiento;
        }else if(categoria === 8 || categoria === 9){
            document.getElementById("resultado3").innerHTML = "Eres Benjamin" + anoNacimiento;
        }else if(categoria === 10 || categoria === 11) {
            document.getElementById("resultado3").innerHTML = "Eres Alevin" + anoNacimiento;
        }else if(categoria === 12 || categoria === 13) {
            document.getElementById("resultado3").innerHTML = "Eres Infantil " + anoNacimiento;
        }else if(categoria === 14 || categoria === 15) {
            document.getElementById("resultado3").innerHTML = "Eres Cadete " + anoNacimiento;
        }else if(categoria ===16 || categoria === 17) {
            document.getElementById("resultado3").innerHTML = "Eres Juvenil " + anoNacimiento;
        }else if(categoria >= 18 && categoria < 100) {
            document.getElementById("resultado3").innerHTML = "Eres Senior " + anoNacimiento ;
        }else if(categoria <4 && categoria > 0){
            document.getElementById("resultado3").innerHTML = "No tienes aun clasificacion. Eres muy pequeño " + anoNacimiento ;
        }else{
            document.getElementById("resultado3").innerHTML = "Introduce un numero valido";
        }
    }

}

function generarTablaManana() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    let textoTabla = "<table border='1'><tr><th>Horario</th>";

   
    for (let i = 0; i < dias.length; i++) {
        textoTabla += "<th>" + dias[i] + "</th>";
    }
    textoTabla += "</tr>";

   
    for (let hora = 9; hora < 15; hora += 2) {
        let horaInicio = hora + ":00";
        let horaFin = (hora + 2) + ":00";
        textoTabla += "<tr><th>" + horaInicio + "-" + horaFin + "</th>";

        for (let i = 0; i < dias.length; i++) {
            textoTabla += "<td></td>";
        }
        textoTabla += "</tr>";
    }

    textoTabla += "</table>";
    document.getElementById("tablaManana").innerHTML = textoTabla;
}

function generarTablaTarde() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let textoTabla = "<table border='1'><tr><th>Horario</th>";

    
    for (let i = 0; i < dias.length; i++) {
        textoTabla += "<th>" + dias[i] + "</th>";
    }
    textoTabla += "</tr>";

    
    for (let hora = 16; hora < 21; hora++) {
        let horaInicio = hora + ":00";
        let horaFin = (hora + 1) + ":00";
        textoTabla += "<tr><th>" + horaInicio + "-" + horaFin + "</th>";

        for (let i = 0; i < dias.length; i++) {
            textoTabla += "<td></td>";
        }
        textoTabla += "</tr>";
    }

    textoTabla += "</table>";
    document.getElementById("tablaTarde").innerHTML = textoTabla;
}


