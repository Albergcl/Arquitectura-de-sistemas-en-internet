import { Character } from "../types.ts";

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
