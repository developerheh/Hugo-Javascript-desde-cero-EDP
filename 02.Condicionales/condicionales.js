// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En la Escuela de Programación tienen como condicion para poder inscribirse a los cursos, la persona tenga 18 años o más.
// Pidele al usuario que ingrese su edad ( usando prompt() ), y en caso que tenga 18 años o más imprima un mensaje indicandole que puede inscribirse.
// caso contrario se le indica que no puede inscribirse y la razón.
// Tu codigo 👇:

let edad =prompt("Ingrese su edad");
numEdad = parseInt (edad);
if(numEdad >= 18){
        alert("Usted esta apto a incribirse")

}else {alert("No cumple con los requisitos de la edad mínima")}


//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Calificación | Resultado:</p></div>')
// Ejercicio N° 1:
// Escribe un programa que solicite al usuario ingresar una calificación del 0 al 100 y luego muestre un mensaje según la siguiente escala:
// Calificación de 90 o más: "Excelente"
// Calificación entre 70 y 89: "Bueno"
// Calificación entre 60 y 69: "Suficiente"
// Calificación menor a 60: "Insuficiente"
// Tu codigo 👇:

let calificacion =parseInt(prompt("Ingrese su calificación de 0 a 100 %"));
if(calificacion>=90){
          alert("Excelente");
}else if (70<=calificacion||calificacion>=89){
        alert ("Bueno");
}else if (60<=calificacion||calificacion>=69){
        alert ("Suficiente");
}else if (calificacion<60){
        alert ("Insuficiente");
}    

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Par o Impar | Resultado:</p></div>')
// Ejercicio N° 2:
// Escribe un programa que solicite al usuario ingresar un número entero y luego determine si es par o impar.
// Tu codigo 👇:

let nro =parseInt(prompt("Ingrese un número"));
if((nro % 2)== 0){
        alert("Usted ingresó un número par");     
}else {alert("Es impar");}

//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Día de la Semana | Resultado:</p></div>')
// Ejercicio N° 3:
// Escribe un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana, y luego imprima el nombre del día correspondiente.
// Por ejemplo, si el usuario ingresa 1, el programa debe imprimir "Lunes".
// Tu codigo 👇:

let dia = parseInt(prompt("Ingrese un número, de acuerdo al orden correlativo con la semana: 1-lunes, 2-martes, 3-miércoles, 4-jueves, 5-viernes, 6-sábado, 7-domingo"));
switch (dia) {
        case 1:
                alert("lunes");
                break;
        case 2:
                alert("martes");
                break;
        case 3:
                alert("miércoles");
                break;
        case 4:
                alert("jueves");
                break;
        case 5:
                alert("viernes");
                break;
        case 6:
                alert("sábado");
                break;
        case 7:
                alert("domingo");
                break;
        default:
                alert("ingresó un número no válido");
}
//_________________________________________


/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Antigüedad laboral | Resultado:</p></div>')
// Ejercicio N° 4:
// Escribe un programa que solicite al usuario ingresar su antigüedad en años en una empresa y su salario actual.
// Si la antigüedad es mayor o igual a 5 años, y el salario es menor a $500,
// el programa debe imprimir un mensaje que indique que el empleado es elegible para una bonificación del 10% de su salario actual.
// Tu codigo 👇:


let salario =parseInt(prompt("Ingrese su salario actual"));
let antiguedad =parseInt(prompt("Ingrese su antigüedad en el trabajo"));
if (antiguedad>=5&&salario<500){
        alert("Usted es elegible para una bonificación del 10% de su salario actual");
}else{alert("su salario no presentará modificaciones por ahora")}



//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 5 - Rango de edad | Resultado:</p></div>')
// Ejercicio N° 5:
// Escribe un programa que solicite al usuario ingresar su edad y luego determine en qué rango de edad se encuentra:
// Menor de 18 años: "Menor de edad"
// Entre 18 y 65 años: "Adulto"
// Mayor de 65 años: "Senior"
// Tu codigo 👇:

let edadUsu =parseInt(prompt("Ingrese su edad"));
switch (true) {
        case (edadUsu<18):
                alert("Menor de edad");
                break;
        case (edadUsu<66):
                alert("Adulto");
                break;
        default:
                alert("Senior");
                break;
}
//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)