// Array de objetos que representan diferentes préstamos
let prestamos = [
    {
        tipo: 'Personal',
        tasaInteres: 5.5, // en porcentaje
        montoMaximo: 50000, // en la moneda local
        plazoMaximo: 5, // en años
    },
    {
        tipo: 'Hipotecario',
        tasaInteres: 3.8,
        montoMaximo: 300000,
        plazoMaximo: 30,
    },
    {
        tipo: 'Automotriz',
        tasaInteres: 4.2,
        montoMaximo: 30000,
        plazoMaximo: 6,
    },
    {
        tipo: 'Estudiantil',
        tasaInteres: 4.5,
        montoMaximo: 20000,
        plazoMaximo: 10,
    }
];

// Mostrar el array en la consola
console.log(prestamos);


// Array de Ususarios

const arrayDeUsuarios = {
    {
        nombre: "Wilmen",
        edad: 20,
    },
    {
        nombre: "josias",
        edad: 34,
    },
    {
        nombre: "Maria"
        edad: 32,
    },
};

for (let i=0; i < arrayDeUsuarios.length; i++) {
    console.log("===================");
    console.log("Nombre: " + arrayDeUsuarios[i].nombre);
    console.log("Nombre: " + arrayDeUsuarios[i].edad);
}