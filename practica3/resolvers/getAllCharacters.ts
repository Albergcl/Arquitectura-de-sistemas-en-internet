import { RootC } from "../types.ts";

const getAllCharacters = async(page: number): Promise<RootC> => {
    const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const data = await fetch(URL);

    if(data.status !== 200){
        throw new Error("Bad Request");
    }
    const json = await data.json();
    return {
        ...json
    };
}



export default getAllCharacters;
