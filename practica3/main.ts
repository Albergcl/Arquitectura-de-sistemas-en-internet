import express, {Request, Response} from "npm:express@4.18.2"
import getCharacter from "./character.ts";
import getLocation from "./location.ts";

const app = express();

app.get("/character/:personaje", async (req: Request, res: Response) => {
    try{
        const personaje = req.params.personaje;
        const character = await getCharacter(personaje);
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

app.get("/location/:localizacion", async (req: Request, res: Response) => {
    try{
        const localizacion = req.params.localizacion;
        const location = await getLocation(localizacion);
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

app.listen(3000);
