/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
const bienvenida = (nombre,apellido)=>{
    return `Bienvenido ${nombre} ${apellido}`;
}



/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:

const calc = (num1, operador, num2) =>{

    let a = num1;
    let b = num2;

    if (operador == "+"){
        return (a + b);
    }else if (operador == "-"){
        return (a - b);
    }else if (operador == "*"){
        return (a * b);
    }else if (operador == "/"){
        return (a / b);
    }else if (operador == "%"){
        return (a % b);
    }
}



/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:

const temp = (tMin,tMax,PLluvia) =>{

    if (tMax<15){
        if (PLluvia>50){
            return "Es recomendable salir con abrigo, recomendable un paraguas";
        }
        return "Es recomendable salir con abrigo";
    }else if (((tMin>=16) && tMax<26)){
        if (PLluvia>50){
            return "El día está lindo, recomendable un paraguas";
        }
        return console.log("El día está lindo");
    }else if ((tMin>25)||(tMax>35)){
        if (PLluvia>50){
            return console.log("El día estará caluroso y es recomendable un paragüas")
        }
        return console.log("El día va a estar caluroso");
    }
}

/**********************************************************************************/

// Crea una función que reciba una contraseña, esta función tiene que determinar si contiene al menos 8 caracteres la contraseña.
// Si la contraseña contiene 8 caracteres, devolver "La contraseña es segura", en caso contrario devolver "La contraseña es insegura"
// IMPORTANTE -> la funcion debe llamarse 'checkPassword'
// Tu código:

const checkPassword = (contrasegna) =>{
    let pass = contrasegna;
    if (pass.length>=8){
        return "La contraseña es segura";
    }else{
        return "La contraseña es insegura";
    }
}



/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

const stringInverso = (cadena) =>{
    let cad = cadena;
    let invCad ="";
    let anterior = (cad.length -1);
for (let i = anterior; i >= 0; i--) {
     invCad += cad[i];
  } 
  return invCad;
}

/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
}