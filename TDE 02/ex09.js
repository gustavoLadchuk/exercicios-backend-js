//9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso 
//caso contrário.

function parOuImpar(numero)
{
    if (numero % 2 == 0)
    {
        return true
    }
    return false
}

console.log(parOuImpar(8))