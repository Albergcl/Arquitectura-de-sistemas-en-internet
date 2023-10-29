import { RootL } from "../types.ts";

const filterLocations = async(tipo: string, dimension: string):Promise<RootL> => {
    const URL = `https://rickandmortyapi.com/api/location/?type=${tipo}&dimension=${dimension}`;
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

export default filterLocations;