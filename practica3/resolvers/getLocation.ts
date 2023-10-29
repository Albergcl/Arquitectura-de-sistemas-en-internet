import { Location } from "../types.ts";

const getLocation = async(numLocation: number):Promise<Location> => {
    const URL = `https://rickandmortyapi.com/api/location/${numLocation}`;
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

export default getLocation;