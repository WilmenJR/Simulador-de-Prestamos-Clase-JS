// Practicas de Js

//let nombre = "will";
//let apellido = "Rosa";
//let nombreApellido = nombre + " " + apellido;


//let anioActual = 2024;
//let anioNacimiento = 2004;
//let edad = anioActual - anioNacimiento;

//const IVA = 20;

//console.log(edad);

let nombreUsuario = prompt("ingrese su nombre");

alert("Hola " + nombreUsuario + "," +  " " + "Pida un Prestamo");

//let edad = prompt("Ingrese su edad");

//if (edad >= 18) {
//    alert("Eres mayor de edad. Puedes ingresar.");
//} else {
//    alert("Eres menor de edad. No puedes ingresar.")
//}

//let usuario1 = "will";
//let usuario2 = "coder";

//let nombreUsuario = prompt("ingrese su nombre de usuario");

//if (nombreUsuario == "usuario1" || nombreUsuario == "usuario2") {
//    alert("Bienvenido " + nombreUsuario);
//} else {
//    alert("Nombre de usuario incorrecto.");
//}

// Ciclo while


//let x = 0;
//while (x < 10) {
    //alert("Ahora X vale " + x);
    //console.log("ciclo numero " + x);
    //x = x + 1;
//}

// Funsiones

//function saludar(nombre) {
    //console.log("Hola " + nombre);
//}
//saludar("Will");

//console.log("Hola");

//let numero = 5;
//console.log(numero);

//let op1 = 2;
//let op2 = 3; 

//let resultado = op1 + op2; 
//console.log("Resultado vale: " + resultado);


// Función para calcular el pago mensual de un préstamo
function calcularPagoMensual(monto, tasaInteres, meses) {
    let tasaMensual = tasaInteres / 100 / 12;
    let pagoMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));
    return pagoMensual;
}

// Función para manejar el cálculo al hacer clic en el botón
document.getElementById('calcular').addEventListener('click', function() {
    let monto = parseFloat(document.getElementById('monto').value);
    let tasaInteres = parseFloat(document.getElementById('tasa').value);
    let meses = parseInt(document.getElementById('meses').value);

    if (isNaN(monto) || isNaN(tasaInteres) || isNaN(meses) || monto <= 0 || tasaInteres < 0 || meses <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos.";
        return;
    }

    let pagoMensual = calcularPagoMensual(monto, tasaInteres, meses);
    document.getElementById('resultado').innerText = `El pago mensual es: $${pagoMensual.toFixed(2)}`;
});