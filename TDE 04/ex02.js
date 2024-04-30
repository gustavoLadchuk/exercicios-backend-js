function soma(numero1, numero2)
{
   return new Promise((resolve, reject) =>
{
    const resultado = numero1 + numero2

    if (resultado % 2 == 0) 
    resolve("A operação foi concluída com sucesso, o numero somado é par: "+ resultado)
    else 
    reject("A operação falhou, o numero somado é ímpar: " + resultado)
})
}

soma(2, 3)
.then(resultado => {console.log(resultado)})
.catch(erro => {console.log(erro)})

