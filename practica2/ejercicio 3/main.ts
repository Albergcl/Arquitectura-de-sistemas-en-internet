interface Libro{
    id: string,
    title: string,
    author: string,
    pages: number,
    genre: string
}

let biblio: Libro[] = [];

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
    librosGenero.forEach(libro => console.log(libro));
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