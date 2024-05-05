function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇

let cadena = phrase;
let contador = 0;
for (let i = 0; i < cadena.length; i++) {
    if (cadena[i]=== "a"||cadena[i]=== "e"||cadena[i]=== "i"||cadena[i]=== "o"||cadena[i]=== "u"){
    contador++;
    }
}
return console.log("Esta cadena posee : "+contador+" vocales");
}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇

let dvsor = divisor;
let divi = dividendo;
if (dvsor < divi){
    console.log("No hay divisor entero posible, el divisor es menor que el dividendo")
}else{
    while(dvsor>0){
        if(dvsor%divi==0){
            return dvsor;
        }
        dvsor--;
    }
  }
}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
let perdido= x;
for (let i = 1; i < 100; i++) {
    console.log("recorriendo... del 1/100  :"+ i);
    if (i===x){
    return console.log("El número X es : "+ i);
    }
  }
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let n= num;
let sum = 0;
for (let i = 0; i < n; i++) {
    if(i==0){
        console.log("  :"+i);
    }else{
        console.log("+ :"+i);
    }
    sum = sum + i;
}
return sum;
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
let binary = [];
let stri = num;
for (let i = 0; i <stri.length; i++) {    
    binary[i] = parseInt(stri[i])
    console.log("el correspondiente binario texto a dígito por cada posición es : "+binary[i]);
 }
toString(binary);
return console.log(binary);
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
let n = numero;
if (n==1||n==2||n==3){
   return console.log("Es primo");
} else {
    for (let i = 2; i < (n-1); i++) {
    if(n%i==0){
        i=n;
        return console.log("No es primo");
    }else {
        return console.log("Es primo");
    }
    }    
 }
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
let cad = cadena;
let invCad ="";
let anterior = (cad.length -1);
for (let i = anterior; i >= 0; i--) {
     invCad += cad[i];
}
console.log(invCad);
}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}