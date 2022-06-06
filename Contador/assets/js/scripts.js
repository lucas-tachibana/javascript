var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    desabilitarBotoes(currentNumber);
    corNegativo(currentNumber);
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    desabilitarBotoes(currentNumber);
    corNegativo(currentNumber);
}





// implementar eventos com Event Listener

document.getElementById("adicionar").addEventListener("click", increment);

document.getElementById("subtrair").addEventListener("click", decrement);

// Condicionais para desabilitar botões

function desabilitarBotoes(currentNumber){
    if (currentNumber >= 10) {
        document.getElementById("adicionar").disabled = true;
    } else if (currentNumber <= -10) {
        document.getElementById("subtrair").disabled = true;
    } else {
        document.getElementById("subtrair").disabled = false;
        document.getElementById("adicionar").disabled = false;
    }
}


//Mudar cor em CURRENT_NUMBER para vermelho quando o número for negativo
function corNegativo(currentNumber){
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    } else {
        document.getElementById("currentNumber").style.color = "black";
    }
}