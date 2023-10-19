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

const getCharacter = async(numPersonaje: number):Promise<Character> => {
    const URL = `https://rickandmortyapi.com/api/character/${numPersonaje}`;
    const data = await fetch(URL);

    if(data.status !== 200){
        throw new Error("Bad Request");
    }
    const json = await data.json();
    const date = new Date(json.created)
    return {
        ...json,
        created: date
    };
}

export default getCharacter;