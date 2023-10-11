export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        Data[];
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

type Data = {
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
}

const fetchData = async() => {
    try{

        const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes");

        const data: ResponseData = await response.json();

        data.data.forEach( datos => {
            console.log("---------------------------------");
            console.log("Genero: ", datos.quoteGenre, 
                        "\nAutor: ", datos.quoteAuthor, 
                        "\nQuote: ", datos.quoteText);
        });

    } catch(error){
        console.log(error);
    }
}
 
await fetchData();