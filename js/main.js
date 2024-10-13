// Practicas de Js

//let nombre = "will";
//let apellido = "Rosa";
//let nombreApellido = nombre + " " + apellido;


//let anioActual = 2024;
//let anioNacimiento = 2004;
//let edad = anioActual - anioNacimiento;

//const IVA = 20;

//console.log(edad);

//let nombreUsuario = prompt("ingrese su nombre");

//alert("Hola " + nombreUsuario + "," +  " " + "Pida un Prestamo");

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


document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let amount = parseFloat(document.getElementById('amount').value);
    let interest = parseFloat(document.getElementById('interest').value);
    let years = parseInt(document.getElementById('years').value);

    
    let monthlyInterest = interest / 100 / 12;
    let numberOfPayments = years * 12;

    let monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

    
    let loanData = { amount, interest, years, monthlyPayment };
    localStorage.setItem('loanData', JSON.stringify(loanData));

    
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `La cuota mensual es: $${monthlyPayment.toFixed(2)} USD`;
});


window.onload = function() {
    let savedLoan = localStorage.getItem('loanData');
    if (savedLoan) {
        let loanData = JSON.parse(savedLoan);
        document.getElementById('result').innerHTML = `Última cuota mensual guardada: $${loanData.monthlyPayment.toFixed(2)} USD`;
    }
}