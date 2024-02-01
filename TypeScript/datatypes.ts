// Sintaxe/Estrutura do TS
let lnome:string = 'joão pedro' 

// Práticamente um array de cores, onde cada posição aponta pra uma das cores
const enum Color { 
    Red,
    Green,
    Blue
}

// Localização/Localizar e Somatória de todo os items da lista
let numList: Array<number>;

numList = [1,2,3,4,5,6,7,8,9,10]

let menorQ = numList.filter((num) => num > 5);
let findN = numList.find((num)=> num === 7) // Lembrando que === inclui o tipo, == não

function somatoria(numeros: number[]): number { // => um array number, que retorna number {}
    return numeros.reduce((acumulador, numero) => acumulador + numero);
}

console.log(somatoria(numList))
