//5. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. 
//A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada 
//e retornar true se sim, ou false caso contrário. (Ex. nome possui mais de 3 caracteres, senha existe, etc)

const objeto = 
{
    nome: 'João Pereira da Silva',
    idade: 20,
    email: 'joaosilva@gmail.com',
    senha: 'jps201104'
}

const validarNome = (objeto) =>
{
    if (objeto.nome.length > 3) return true 
    return false
}

function validarDados(validacao, objeto)
{
    if (validacao(objeto)) return true
    return false
}

console.log(validarDados(validarNome, objeto))