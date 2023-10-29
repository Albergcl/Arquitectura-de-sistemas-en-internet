import { RootL } from "../types.ts";

const getAllLocations = async(page: number): Promise<RootL> => {
    const URL = `https://rickandmortyapi.com/api/location/?page=${page}`;
    const data = await fetch(URL);

    if(data.status !== 200){
        throw new Error("Bad Request");
    }
    const json = await data.json();
    return {
        ...json
    };
}



export default getAllLocations;
