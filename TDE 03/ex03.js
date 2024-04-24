//3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. A função 
//mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os 
//elementos resultantes.

const array = [1, 2, 3, 4, 5]

function mapearArray(func, arr)
{
    let novoArray = []
    for (let elemento of arr)
    {
        let novoElemento
        novoElemento = func(elemento)
        novoArray.push(novoElemento)
    }
    return novoArray
}

console.log(mapearArray((elemento) =>  elemento * 2, array))