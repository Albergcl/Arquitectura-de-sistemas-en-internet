const ordenarSeparar = (arrStrings: string[]): string =>{

    if(arrStrings.length === 0){
        return "";
    }

    arrStrings.sort();
    const primerString = arrStrings[0];
    let letrasSeparadas = "";
    for(let i = 0; i < primerString.length; i++){
        letrasSeparadas += primerString[i] + " ";
    }

    return letrasSeparadas;
}

const palabras = ["folio", "manzana", "beso", "comida"];
const resultado = ordenarSeparar(palabras);
console.log(resultado);