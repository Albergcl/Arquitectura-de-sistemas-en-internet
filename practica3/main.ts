import express, { type Request, Response } from "npm:express@4.18.2";
import { Character, RootC, RootL, Location } from "./types.ts";

import getAllCharacters from "./resolvers/getAllCharacters.ts";
import getCharacter from "./resolvers/getCharacter.ts";
import getAllLocations from "./resolvers/getAllLocations.ts";
import getLocation from "./resolvers/getLocation.ts";
import filterCharacter from "./resolvers/filterCharacters.ts";
import filterLocations from "./resolvers/filterLocations.ts";


const app = express();
let listaCharacter: Character[] = [];
let listaLocation: Location[] = [];

//Listar todos los caracteres
app.get("/character", async(_req: Request, res: Response) => {
    try{
        const characters: RootC = await getAllCharacters(1);

        const personajes: string[] = [];

        characters.results.forEach(f => {personajes.push(f.name)})
        res.send({
            personajes
        })
    }catch(error){
        console.log(error);
    }
});

app.get("/character/:pagina", async(_req: Request, res: Response) => {
    try{
        const pagina = Request.params.pagina;
        const characters: RootC = await getAllCharacters(pagina);

        const personajes: string[] = [];

        characters.results.forEach(f => {personajes.push(f.name)})
        res.send({
            personajes
        })
    }catch(error){
        console.log(error);
    }
});

//Obtener un caracter especifico
app.get("/character/:personaje", async (req: Request, res: Response) => {
    try{
        const personaje = req.params.personaje;

        const character = await getCharacter(personaje);
            //listaCharacter.push(character);
            res.send({
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                origin: character.origin.name,
                location: character.location.name,
                created: character.created.getDate() + "-" + character.created.getMonth() + "-" + character.created.getFullYear()
            });
        
    }catch(error){
        console.log(error);
    }
});

//Listar todas las localizaciones
app.get("/location", async (_req: Request, res: Response) => {
    try{
        const location: RootL = await getAllLocations(1);

        const localizaciones: string[] = [];

        location.results.forEach(f => {localizaciones.push(f.name)})
        res.send({
            localizaciones
        })
    }catch(error){
        console.log(error);
    }
});

app.get("/location/:pagina", async (_req: Request, res: Response) => {
    try{
        const pagina = Request.params.pagina;
        const location: RootL = await getAllLocations(pagina);

        const localizaciones: string[] = [];

        location.results.forEach(f => {localizaciones.push(f.name)})
        res.send({
            localizaciones
        })
    }catch(error){
        console.log(error);
    }
});

//Obtener una localizacion especifica
app.get("/location/:localizacion", async (req: Request, res: Response) => {
    try{
        const localizacion = req.params.localizacion;
        const location = await getLocation(localizacion);
        //listaLocation.push(location);
        res.send({
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension,
            created: location.created.getDate() + "-" + location.created.getMonth() + "-" + location.created.getFullYear()
        });
    }catch(error){
        console.log(error);
    }
});

//Filtrar caracteres por status y gender
app.get("/character/filter/:estado/:genero", async (req: Request, res: Response) => {
    try{
        const filtro_estado = req.params.estado;
        const filtro_genero = req.params.genero;
        const filter = await filterCharacter(filtro_estado, filtro_genero);

        const character: Character[] = [];

        filter.results.forEach(f => {const date = new Date(f.created);
                                        character.push({
                                        id: f.id,
                                        name: f.name,
                                        status: f.status,
                                        species: f.species,
                                        gender: f.gender,
                                        origin: f.origin.name,
                                        location: f.location.name,
                                        created: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()})
                                    })
        
        res.send({
            character
        })
    }catch(error){
        console.log(error);
    }
});

//Filtrar localizaciones por type y dimension
app.get("/location/filter/:tipo/:dimension", async (req: Request, res: Response) => {
    try{
        const filtro_tipo = req.params.tipo;
        const filtro_dimension = req.params.dimension;
        const filter = await filterLocations(filtro_tipo, filtro_dimension);

        const location: Location[] = [];

        filter.results.forEach(f => {const date = new Date(f.created);
                                    location.push({
                                     id: f.id,
                                     name: f.name,
                                     type: f.type,
                                     dimension: f.dimension,
                                     created: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()})
                                    })
        res.send({
            location
        })
    }catch(error){
        console.log(error);
    }
});

//Eliminar un caracter por su id
const eliminarCharacter = (id: number) => {
    const index = listaCharacter.findIndex(c => c.id === id);

    if(index !== -1){
        listaCharacter = listaCharacter.filter((c, i) => i !== index);
    }
}

//Eliminar una localizacion por su id
const eliminarLocation = (id: number) => {
    const index = listaLocation.findIndex(l => l.id === id);

    if(index !== -1){
        listaLocation = listaLocation.filter((l, i) => i !== index);
    }
}

app.listen(3000);
