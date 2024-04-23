//14. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se a soma deles 
//for divisível por 5 e falso caso contrário.

function somaDivisivelPor5(numero1, numero2)
{
    if ((numero1 + numero2) % 5 == 0)
    {
        return true
    }
    return false
}

console.log(somaDivisivelPor5(7, 3))