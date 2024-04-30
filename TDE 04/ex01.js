const callbackSucesso = (valor) =>
{
    console.log(`A operação foi concluída com sucesso, o numero somado é par: ${valor}`)
}

const callbackError = (valor) =>
{
    console.log(`A operação falhou, o numero somado é ímpar: ${valor}`)
}

function soma(numero1, numero2, sucesso, erro)
{
    resultado = numero1 + numero2
    if (resultado % 2 == 0) sucesso(resultado)
    else erro(resultado)
}

soma(2, 5, callbackSucesso, callbackError)
