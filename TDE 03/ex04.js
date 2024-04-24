//4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. 
//A função de filtro deve retornar true caso o elemento dela permanecer no array e false caso contrario. 
//A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os 
//elementos restantes

const array = [10, 20, 50, 99, -18, -510, 220]

const filtro = (elemento) => 
{
    if (elemento > -20 && elemento < 100) return true
    return false
}

function filtrarArray(filtro, array)
{
    let novoArray = []
    for (let elemento of array)
    {
        if (filtro(elemento)) novoArray.push(elemento)
    }
    return novoArray
}


console.log(filtrarArray(filtro, array))

