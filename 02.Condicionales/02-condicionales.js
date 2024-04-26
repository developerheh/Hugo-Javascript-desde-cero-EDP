function verificarNumero(numero){
    // Escribe un programa que tome un número como entrada y muestre "Es positivo" si el número es mayor que cero,
    // "Es negativo" si es menor que cero y "Es cero" si es igual a cero.
    // Tu código 👇:
    let a = numero;
    if (a<0){arguments = "Es negativo";
    }else if(a>0){
        arguments = "es positivo";
    } else {
        arguments= "es cero";
    }
    return arguments;

}


function esBisiesto(anio){
    // Escribe un programa que determine si un año es bisiesto o no. (true o false)
    // Un año es bisiesto si es divisible entre 4, excepto aquellos que son divisibles entre 100 pero no entre 400.
    // Tu código 👇:
    let a = anio;
    if ((a%4)===0){
        resultado= "Es bisiesto!"
        if (((a%100)===0)){
            if(a%400!==0){
            resultado = "No es bisiesto";
            }
        }
    }else {resultado= "No es bisiesto!"}
    return resultado;
}

function verificarCalificacion(calificacion){
    // Escribe un programa que determine si un estudiante aprobó o reprobó un examen.
    // El estudiante aprueba si su calificación es mayor o igual a 60.
    // Devolver "Aprobó" o "Reprobó"
    // Tu código 👇:
    let c = calificacion;
    if ((c>=60)){
        resultado= "Aprobó"
    }else {resultado= "No Aprobó"}
    return resultado;

}

function esMayor(num1, num2, num3){
    // Escribe un programa que determine el mayor de tres números dados.
    // Devolver el numero mayor
    // Tu código 👇:
    let n1 = num1;
    let n2 = num2;
    let n3 = num3;
    if (n1==n2 && n2==n3){
        resultado = console.log("Los números son iguales:")
    } else{
        if (n1>=n2){
            if(n1>=n3){
                elMayor=n1;
            }
        }else if (n2>=n3){
            elMayor = n2;
        }else{elMayor = n3;}
        resultado = console.log("El número mayor es :"+elMayor)

    }

    return resultado;
}

function esPrimo(num){
    // Escribe un programa que determine si un número dado es primo.
    // Devolver true o false
    // Tu código 👇:

    let n = num;
    let div = 2;
    function sacarPrimo(n,div){
        if(n/div < 2){
            valor = true
            return valor;
        } else {
                if(n%div==0){
                    return false;
                } else {
                    return sacarPrimo(n, div+1); //uso recursividad
                }
        }
    }
    return sacarPrimo(n,div);
}

module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}