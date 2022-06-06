function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão Real\n5 - Divisão Inteira\n6 - Potênciação'));

    if (!operacao || operacao >= 7){
        alert('Erro - Operação inválida');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;
    
        if (!n1 || !n2) {
            alert('Erro - Parâmetros Inválidos');
            calculadora();
        } else {
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function resto(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            function potencia(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
                novaOperacao();
            }
        
            function novaOperacao() {
                let opcao = Number(prompt('Deseja fazer outra operação\n 1 - Sim\n 2 - Não'));
        
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Obrigado')
                } else {
                    alert('Digite uma operação válida')
                    novaOperacao();
                }
            }
        }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                resto();
                break;
            case 6:
                potencia();
                break;
        }
        // if (operacao == 1) {
        //     soma();
        // } else if (operacao == 2) {
        //     subtracao();
        // } else if (operacao == 3) {
        //     multiplicacao();
        // } else if (operacao == 4) {
        //     divisaoReal();
        // } else if (operacao == 5) {
        //     resto();
        // } else if (operacao == 6) {
        //     potencia();
        // }
        
    }
    
}


calculadora();