type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: Origin,
    location: Location,
    created: Date
}

type Origin = {
    name: string
}

type Location = {
    name: string
}

const filterCharacter = async(estado: string, genero: string):Promise<Character> => {
    const url_filtro = `https://rickandmortyapi.com/api/character/?status=${estado}&gender=${genero}`;
    const data_filtro = await fetch(url_filtro);

    if(data_filtro.status !== 200){
        throw new Error("Bad Request");
    }
    const json_filtro = await data_filtro.json();
    const date_filtro = new Date(json_filtro.created);
    return {
        ...json_filtro,
        created: date_filtro
    };
}

export default filterCharacter;