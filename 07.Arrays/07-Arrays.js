function primerElemento(arg) {
    //dado el array pasado por parametro, tendras que devolver el primer elemento
    // tu código:
    let primerElemento = arg[0];
    return primerElemento;
}

function ultimoElemento(arg) {
    //dado el array pasado por parametro, tendras que devolver el ultimo elemento
    // tu código aqui:
    let subIndiceUltimoElemento = arg.length - 1;
    console.log(subIndiceUltimoElemento);
    let ultimoElemento = arg[subIndiceUltimoElemento];
    return ultimoElemento;
}

function nuevoArray(arg) {
    //dado el array pasado por parametro retorna su longitud
    // tu código aqui:
    let longitud = arg.length;

    return longitud;

}

function changeArray(arr) {
    //dado el array pasado por parametro, cambia el valor del primero elemento por 'Aprendiendo' y
    //el ultimo elemento por 'array'
    //retorna el nuevo valor
    // tu código aqui:
    let primerElemento = "Aprendiendo";
    let ultimoElemento = "array";
    let posiciónUltimoElemento = (arr.length - 1);

    arr[0] = primerElemento;
    arr[posiciónUltimoElemento] = ultimoElemento;

    return arr;
}

function primerasCondicionales(arg) {
    // pasados los array por parametros tendras que devolver según lo que corresponda:
    // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
    // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
    // longitud de array menor que 3 retornar: 'Este array es menor a 3'
    // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
    // tu código aqui:
    let longitud = arg.length;
    if (longitud > 3) {
        return 'Este array es mayor a 3';
    } else if (longitud == 3) {
        return 'Este array es igual a 3';
    } else if (longitud < 3 && longitud != 0) {
        return 'Este array es menor a 3';
    } else {
        return 'Este array no contiene elementos';
    }

}

function sumandoEnUno(arg) {
    // dado el array de numeros enteros pasado por parametro, a cada elemento del array
    // tienes que sumarle 1.. ejemplo: [4 , 5, 6] -> [5 , 6, 7] 
    // tu código aqui:
    // Example 1: Loop through an array and log the value of each element
    arg.forEach((valor, indice, arr) => {
        arr[indice] = valor + 1; // suma en uno cada valor original del array
    });
    return arg;
}// Nota este ejercicio se puede siemplifica aún mas usando el método "map" de los arrays!!
// acá se termina modificando el array original.

function valorMaximo(arr) {
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más alto y devolverlo
    //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
    // Tu codigo:
    let alto = -Infinity;
    arr.forEach((value) => {

        if (value > alto || value == alto) {
            alto = value;
        }
    });
    return alto;
}

function valorMinimo(arr) {
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más bajo y devolverlo
    //ejemplo -> [ 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 2
    // Tu codigo:
    let bajo = Infinity;
    arr.forEach((valor) => {

        if (valor < bajo || valor == bajo) {
            bajo = valor;
        }
    });
    return bajo;

}

function cantPares(arr) {
    //Se pasa un array de enteros, tienes que iterar por los elementos y contar la cantidad de numeros que son pares
    // devolver la cantidad de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
    // Tu codigo:
    let contador = 0;
    arr.forEach((valor) => {
        if ((valor % 2) == 0) {
            contador++;
        }
    })
    return contador;
}

function eliminarDuplicado(arr) {
    // Se pasa un array de enteros, tienes que iterar por los elementos y eliminar los duplicados, y devolver el array nuevo sin duplicado.
    // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
    // Tu codigo:
    let resultado = [];
    let indice = 0;

    arr.forEach((num) => {
        let existeDuplicado = false;
        for (let i = 0; i < resultado.length; i++) {
            if (resultado[i] === num) {
                existeDuplicado = true;
            }
        }
        if (!existeDuplicado) {
            resultado[indice] = num;
            indice++;
        }
    });

    // Reducir el tamaño del array resultado a solo los elementos únicos
    let resultadoFinal = new Array(indice);
    for (let i = 0; i < indice; i++) {
        resultadoFinal[i] = resultado[i];
    }

    return resultadoFinal;
}



function enOrden(arr, ascendente = true) {
    //Se para un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Intercambiar los elementos
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Optimización: reducir la longitud de la iteración en cada pasada
    } while (swapped);

    return arr;
}

function dosEnUno(arr1, arr2){
    //Escribe una función que reciba dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
    //Tu codigo:
    // return arr1.concat(arr2);
    let resultadoUno = [];
    let resultadoDos=[];
    let indice = 0;
    let indiceDos = 0;

    arr1.forEach((num) => {
        let existeDuplicado = false;
        for (let i = 0; i < resultadoUno.length; i++) {
            if (resultadoUno[i] === num) {
                existeDuplicado = true;
            }
        }
        if (!existeDuplicado) {
            resultadoUno[indice] = num;
            indice++;
        }
    });


    let resultadoFinalUno = new Array(indice);
    for (let i = 0; i < indice; i++) {
        resultadoFinalUno[i] = resultadoUno[i];
    }
    console.log(resultadoFinalUno); // Salida del array depurado  Uno

    arr2.forEach((num) => {
        let existeDuplicado = false;
        for (let i = 0; i < resultadoDos.length; i++) {
            if (resultadoDos[i] === num) {
                existeDuplicado = true;
            }
        }
        if (!existeDuplicado) {
            resultadoDos[indiceDos] = num;
            indiceDos++;
        }
    });

    // Reducir el tamaño del array resultado a solo los elementos únicos
    let resultadoFinalDos = new Array(indice);
    for (let i = 0; i < indice; i++) {
        resultadoFinalDos[i] = resultadoDos[i];
    }
    console.log(resultadoFinalDos); // Salida del array depurado  Uno

    let indiceTres = resultadoFinalDos.length + resultadoFinalUno.length;
    let resultadoConcatenado= Array(indiceTres);

    // Usar un bucle for para agregar los elementos del primer array
    for (let i = 0; i < resultadoFinalUno.length; i++) {
        resultadoConcatenado[i] = resultadoFinalUno[i];
    }
    
    // Usar otro bucle for para agregar los elementos del segundo array
    for (let i = 0; i < resultadoFinalDos.length; i++) {
        resultadoConcatenado[resultadoFinalUno.length + i] = resultadoFinalDos[i];
    }
   return resultadoConcatenado;

}
/**
 * 
 * @param {matriz} matriz 
 * @returns la matriz transpuesta.
 */
function matrizTranspuesta(matriz) {
    //Escribe una función que reciba una matriz (array de arrays) y devuelva la matriz transpuesta, es decir, intercambiando filas por columnas.
    //Tu codigo:
        // Crear una matriz vacía para almacenar la transpuesta
    let matrizTranspuesta = [];

    // Obtener el número de filas y columnas de la matriz original
    let filas = matriz.length;
    let columnas = matriz[0].length;

    // Inicializar la matriz transpuesta con arrays vacíos
    for (let i = 0; i < columnas; i++) {
        matrizTranspuesta[i] = [];
    }

    // Llenar la matriz transpuesta
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            matrizTranspuesta[j][i] = matriz[i][j];
        }
    }

    return matrizTranspuesta;

}

module.exports = {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales,
    valorMaximo,
    valorMinimo,
    cantPares,
    eliminarDuplicado,
    enOrden,
    dosEnUno,
    matrizTranspuesta,
}