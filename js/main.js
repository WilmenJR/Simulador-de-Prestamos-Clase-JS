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

//alert("Hola " + nombreUsuario + ".");

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

function gen_table(){
    document.getElementById("tab").innerHTML="";
    let n=Number(document.getElementById("capital").value);
    let n2=Number(document.getElementById("couta").value);
    let n3=Number(document.getElementById("interes").value);
    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed(2);
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        t_p=r*n2;
        d5=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}