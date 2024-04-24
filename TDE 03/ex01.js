//1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna 
//o maior elemento do array.

const arrayNumeros = [1, 2, 3, 4, 5]

function encontrarMaiorElemento(numeros)
{
    let maior = numeros[0]
    for (let numero of numeros)
    {
        if (numero > maior) maior = numero
    }
    return maior
}


console.log(encontrarMaiorElemento(arrayNumeros))