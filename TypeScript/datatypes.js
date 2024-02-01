"use strict";
// Sintaxe do TS
let lnome = 'joão pedro';
// Práticamente um array de cores, onde cada posição aponta pra uma das cores
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Localização e Somatória de todo os items da lista
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let menorQ = numList.filter((num) => num > 5);
let findN = numList.find((num) => num === 7); // Lembrando que === inclui o tipo, == não
function somatoria(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero);
}
console.log(somatoria(numList));
