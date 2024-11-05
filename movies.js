    // 2) Array de peliculas

let movies = ["Turno de dia", "30 noches con mi ex", "Bestia", "El monte", "Top gun Maverick", "Elvis", "Thor: amor y trueno"];

    // 3) 'Thor: Amor y Trueno' posicionada primera en la lista

console.log("\nPeliculas ANTES de posicionar a Thor primero:",movies);

let bestSeller = movies.indexOf("Thor: amor y trueno");
let movieTop = movies.unshift(movies[bestSeller].toUpperCase())
let changeBestSeller = movies.splice(bestSeller+1, 1);

console.log("\nPeliculas DESPUÉS de posicionar a Thor primero y en mayúscula:",movies);

    // 4) Peliculas a estrenar

let moviesEstreno = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
console.log("\nString de las películas a estrenar:",moviesEstreno);
let moviesEstrenoArray = moviesEstreno.split(" ");
console.log("\nArray de las peliculas a estrenar:",moviesEstrenoArray);

    // 5) Nuevo array con ambos arrays.

let allMovies = movies.concat(moviesEstrenoArray);
console.log("\nArray de la lista completa con todas las películas:\n\n",allMovies)