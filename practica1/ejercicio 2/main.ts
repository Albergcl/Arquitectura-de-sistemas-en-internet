const multiplosTresCinco = (num: number): number[] =>{

    const multiplos: number[] = [];

    for(let i = 0; i <= num; i++){
        if(i % 3 === 0 || i % 5 === 0){
            multiplos.push(i);
        }
    }

    return multiplos;
}

const numero = 30;
const final = multiplosTresCinco(numero);
console.log(final);