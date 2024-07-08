const { replaceMatchedToAsymmetricMatcher } = require("jest-matcher-utils");

function arrayDuplicados(array) {
    // Por parametros recibiras un array de numeros, tendras que el array duplicado! Usa: Metodo .map()
    // Tu codigo:
    //   const dupliArray = array.map((numero)=>{ numero * 2;

    //   })
    // return (dupliArray);
    // const array1 = [1, 4, 9, 16];

    // Pass a function to map
    const map1 = array.map((x) => x * 2);

    return map1;
}
//Me parece mal redactado el original:

// const nombresPersonas = (array) => {
// Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
// Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
// Tu codigo:


// }

function nombresPersonas(array) {
    // Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
    // Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
    // Tu codigo:
    let mapa = [];
    array.map((persona, index) => {

        mapa[index] = persona.name;

    })

    return mapa;

}

function masImpuestos(array) {
    // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% 
    //y agregarlo como propiedad
    // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', 
    //nSerie: 1511440, precio: 1000, Impuestos: 100}
    // Usar metodo .map()
    // Tu codigo:
    return array.map(item => {
        const impuesto = Math.trunc(item.precio * 1 / 10);
        return {
            producto: item.producto,
            nSerie: item.nSerie,
            precio: item.precio,
            impuestos: impuesto
        };
    });
}

function NombresLargos(array) {
    // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
    // Tu codigo:
    const menosDeCinco = array.filter((palabra) => {

        if (palabra.length > 4) {
            return palabra;
        }
    }
    );
    return menosDeCinco;
}

function filtaradoPorCategoria(array, categoria) {
    // Recibiras por porametros un array de objetos con peliculas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria:  }.
    // deberás usar metodo filter, para devolver un array con los nombres de las peliculas que sean de la categoria pedida.
    // Tu codigo:

    // usando solo bucle for: 

    // acumulador =[];
    // for (let i = 0; i < array.length; i++) {
    //   if(array[i].categoria==categoria){
    //       acumulador.push(array[i].titulo);
    //   }

    // }  
    // return console.log(acumulador);

    //*********************************************/
    // usando solo filter sin arrow function
    // return array.filter(function(c){
    //     return c.categoria == categoria;
    // })

    return array.filter((c) => c.categoria == categoria).map(t => t.titulo);

    // Nota: el siguiente codigo es "estructury"?:
    // return array.filter((c)=> c.categoria == categoria).map(t=>({titulo: t.titulo}));
}

function examenIngreso(array) {
    // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
    // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examon (nota >= 70) y inscripcion completa
    // (inscripcion = true)
    // Tu codigo:

    // Utilizando bucle for y arrays:

    // let count =-1;
    // let arrInter = [];
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i]["nota"]>= 70 && array[i]["inscripcion"]){
    //             count++;
    //             arrInter[count]=array[i];
    //         }
    //     }
    // return arrInter;
    //*********************************************/

    //Utilizando solo filter():

    return array.filter((a)=>(a.nota>=70 && a.inscripcion));

}

function nombreContiene(nombres, search) {
    // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
    // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
    // deberia devolver => ['Agustina','Martina','Cristina']
    // Tu código aquí 👈
    return nombres.filter(nombre => nombre.includes(search));

}


module.exports = {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene

}