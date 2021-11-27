function inserir (num) {         //Uma função para inserir os números
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}
function limpar() {              // Essa função serve para limpar TODOS os números da calculadora 
    document.getElementById('resultado').innerHTML = ""
}
function voltar() {              // Essa função serve para limpar individualmente cada número da calculadora
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular() {          // Apartir daqui é feito os calcular, se caso nenum número for colocardo, receberá um aviso
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerHTML = "Nada para Calcular"
    }
}