const quickSort = (arr: number[]): number[] => {

    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const izda: number[] = [];
    const dcha: number[] = [];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            izda.push(arr[i]);
        }else{
            dcha.push(arr[i]);
        }
    }

    return [...quickSort(izda), pivot, ...quickSort(dcha)];
}

const lista = [21, 1, 34, 57, 12, 329, 40, 0, 2, 2, 412, 0, 123];
const array = quickSort(lista);
console.log(array);