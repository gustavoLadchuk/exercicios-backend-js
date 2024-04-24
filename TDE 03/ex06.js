//6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como 
//parâmetros. A função de geração deve receber um índice e retornar o valor correspondente da lista. A função 
//gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.

const funcao = (i) => 
{
    return (i * 3) - 2
}

function gerarLista(numero, funcao)
{
    let lista = []
    for (let i = 1; i <= numero; i++)
    {
        lista.push(funcao(i))
    }
    return lista
}

console.log(gerarLista(5, funcao))
