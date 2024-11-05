    // Array con 6 elementos 

let electro = ["Heladera", "Microondas", "TV", "Lavarropas", "Freezer", "Parlante"];

// a) Acceder de manera arbitraria a cada uno de los elementos del array.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log("Electrodoméstico mostrado de forma aleatoria: "+electro[getRandomInt(5)]);
console.log("\nElectrodomésticos mostrados uno por uno:\n");

electro.forEach((i) => console.log("*",i));

    // b) Extraer el primer elemento del array y agregarlo al final del mismo.

let electro1 = electro.shift();
console.log("\nArray con elemento extraido: ",electro);

electro.push(electro1)
console.log("Array con el elemento agregado: ",electro);

    // c) Agregar al final del array dos productos nuevos. 

electro.push("Batidora", "Cafetera");
console.log("\nElementos 'Batidora' y 'Cafetera' agregados.",electro);

    // d) Mostrar por consola la cantidad de elementos que contiene el Array.

console.log("\nCantidad de elementos del array: " + electro.length);

    // e) Buscar un elemento del array: Si existe, mostrar 'Producto encontrado', sino mostrar 'El producto buscado no existe.'

(electro.indexOf("Cafetera") !== -1) ? console.log("\n-------Producto encontrado.-------") : console.log("-------El producto buscado no existe.-------\n")

    // f) Unificar todos los elementos del Array en un String separados por un espacio en blanco.

let electro2 = electro.join(" ")
console.log("Array unificado en un String: \n",electro2,"\n")

    // g) Determinar la cantidad de elementos que posee el String obtenido.

let n = 0;
for (i = 0; i < electro2.length; i++) {
        n++;
}
console.log("Cantidad de elementos del String obtenido:",n)

    // h) Cambiar el nombre de algún producto de la cadena de texto por otro.

electro.splice(2, 1, "Tostadora");
console.log("\nCambiado por tostadora:",electro);

// i)   Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. 

let electro3 = electro.join(", ");
electro3 = electro2.split(" ");
console.log("\nString convertido a array:\n",electro3)