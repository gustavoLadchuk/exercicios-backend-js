//6. Crie uma função chamada ehNegativo que recebe um número como parâmetro e retorna true se for 
//negativo e false se for positivo.

function ehNegativo(numero)
{
    if (numero % 2 == 1)
    {
        return true
    }
    return false
}

console.log(ehNegativo(3))