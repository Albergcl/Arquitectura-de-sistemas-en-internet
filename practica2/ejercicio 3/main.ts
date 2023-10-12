type Libro = {
    id: string,
    title: string,
    author: string,
    pages: number,
    genre: string
}

//Incluyo tres libros en la biblioteca para probar las funciones
const l1 = {
    id: "1",
    title: "ajo",
    author: "yo",
    pages: 123,
    genre: "novela"
}

const l2 = {
    id: "2",
    title: "cebolla",
    author: "tu",
    pages: 123,
    genre: "novela"
}

const l3 = {
    id: "3",
    title: "pimiento",
    author: "el",
    pages: 123,
    genre: "terror"
}

let biblio: Libro[] = [];

biblio.push(l1);
biblio.push(l2);
biblio.push(l3);


const crearLibro = (_libro: Libro) => {
    if(biblio.some(libro => libro.id === _libro.id)){
        console.log("Ya hay un libro con el mismo id.");
    } else{
        biblio.push(_libro);
        console.log("Libro creado y añadido correctamente.");
    }
}

const filtroGenero = (genero: string) => {
    const librosGenero = biblio.filter(libro => libro.genre === genero);
    console.log("Resultados: ");
    librosGenero.forEach(libro => console.log(libro.title));
}

const borrarLibro = (id: string) => {
    const index = biblio.findIndex(libro => libro.id === id);

    if(index === -1){
        console.log("No hay ningun libro con ese id.");
    }else{
        biblio = biblio.filter((libro, i) => i !== index);
        console.log("Libro eliminado correctamente.");
    }
}

const opcionesMenu = () => {
    console.log("Opciones:");
    console.log("1. Crear libro");
    console.log("2. Filtrar por genero");
    console.log("3. Borrar libro");
    console.log("4. Salir");
}

const menu = () => {
    opcionesMenu();
    const opcion = prompt("Elige una opcion(1-4): ");
    switch(opcion){
        case '1':
            let _id = prompt("Introduce el id: ");
            let titulo = prompt("Introduce el titulo: ");
            let autor = prompt("Introduce el autor: ");
            let paginas = prompt("Introduce el paginas: ");
            let _genero = prompt("Introduce el genero: ");
            if(_id !== null && titulo !== null && autor !== null && paginas !== null && _genero !== null){
                let libro: Libro ={
                    id: _id,
                    title: titulo,
                    author: autor,
                    pages: parseInt(paginas),
                    genre: _genero
                }
                crearLibro(libro);
            }
            break;
        case '2':
            let genero = prompt("Introduce un genero: ");
            if(genero !== null){
                filtroGenero(genero);
            }
            break;
        case '3':
            let borrador = prompt("Introduce el id del libro que quieras eliminar: ");
            if(borrador !== null){
                borrarLibro(borrador);
            }
            break;
        case '4':
            break;
        default:
            console.log("Opcion no valida.");
    }
}

menu();