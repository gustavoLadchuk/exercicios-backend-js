//2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro e retorna a soma 
//de todos os elementos pares do array.

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somaElementosPares(numeros)
{
    let soma = 0
    for (let numero of numeros)
    {
        if (numero % 2 === 0) soma += numero
    }

    return soma
}

console.log(somaElementosPares(arrayNumeros))