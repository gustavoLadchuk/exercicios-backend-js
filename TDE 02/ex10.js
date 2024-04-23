//10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

function fatorial(numero)
{
    if (numero == 0 || numero == 1)
    {
        return 1
    }
    else
    {
        fatorial = numero
        for (let i = numero - 1; i > 0; i--)
        {
            fatorial *= i
        }   
        return fatorial
    }
}

console.log(fatorial(8))