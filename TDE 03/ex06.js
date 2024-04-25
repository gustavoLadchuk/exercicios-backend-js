//6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como 
//parâmetros. A função de geração deve receber um índice e retornar o valor correspondente da lista. A função 
//gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.

function gerarLista(numero, funcao)
{
    let lista = []
    for (let i = 0; i < numero; i++)
    {
        lista.push(funcao(i))
    }
    return lista
}

console.log(gerarLista(5, (i) => (i * 3) - 2))
