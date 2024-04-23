//8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.

function menorNumero(numero1, numero2, numero3)
{
    let menor = numero1

    if (numero2 < menor)
    {
        menor = numero2
    }
    if (numero3 < menor)
    {
        menor = numero3
    }
    return menor
}
console.log(menorNumero(18, 10, 5))