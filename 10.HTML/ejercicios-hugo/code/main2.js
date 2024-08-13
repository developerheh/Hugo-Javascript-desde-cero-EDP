alert("esto funciona!");


const elementoSumador = document.querySelector('#modificador')




//Funcion sumador
let numero = 0;
const sumador = ()=>{
    numero = numero +1;
    return elementoSumador.innerHTML = numero;
}
//-----------------