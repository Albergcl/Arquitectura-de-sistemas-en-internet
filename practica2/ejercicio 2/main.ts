export interface ResponseData{
    id: number,
    name: string,
    types: Type[],
}

export interface Type{
    name: string,
    url: string,
    slot: number
}

const fetchData = async() => {
    try{

        const pokemon = prompt("Nombre pokemon: ");
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data: ResponseData = await response.json();

        console.log("---------------------------------");
        console.log("Nombre: ", data.name);
        data.types.forEach(t => {
            console.log("Tipo/s: ", t.type.name);
        });
        console.log("Id: ", data.id);
    } catch(error){
        console.log(error);
    }
}

await fetchData();