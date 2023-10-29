import { RootC } from "../types.ts";

const filterCharacter = async(estado: string, genero: string):Promise<RootC> => {
    const URL = `https://rickandmortyapi.com/api/character/?status=${estado}&gender=${genero}`;
    const data = await fetch(URL);

    if(data.status !== 200){
        throw new Error("Bad Request");
    }
    const json = await data.json();
    const date = new Date(json.created);
    return {
        ...json,
        created: date
    };
}

export default filterCharacter;