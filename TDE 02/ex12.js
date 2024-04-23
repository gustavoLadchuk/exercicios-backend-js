//12. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se o primeiro for 
//múltiplo do segundo e falso caso contrário.

function ehMultiplo(numero1, numero2)
{
    if (numero1 % numero2 == 0)
    {
        return true
    }
    return false
}

console.log(ehMultiplo(4, 2))