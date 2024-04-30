var teclado = require("prompt-sync")();
var numeroUm = 0;
var numeroDois = 0;
var resultado = 0;
function escolha() {
    console.log("----------Escolha---------");
    console.log("0 - Sair");
    console.log("1 - Calculadora");
    var opcao = parseInt(teclado("Digite sua escolha: "));
    switch (opcao) {
        case 0:
            sair();
            break;
        case 1:
            calcular;
            break;
        default: break;
    }
}
function sair() {
    console.log("Fim de programa...");
    process.exit(0);
}
function adicao() {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm + numeroDois;
    console.log("O valor da soma de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(resultado));
}
function subtracao() {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm - numeroDois;
    console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(resultado));
}
function multiplicacao() {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm * numeroDois;
    console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(resultado));
}
function divisao() {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm / numeroDois;
    console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("\u00E9 ".concat(resultado));
}
function calcular() {
    console.clear();
    console.log("----------Selecione a opera\u00E7\u00E3o---------");
    console.log();
    console.log("+ - Adi\u00E7\u00E3o");
    console.log("- - Subtra\u00E7\u00E3o");
    console.log("+ - Divis\u00E3o");
    console.log("+ - Multiplica\u00E7\u00E3o");
    var decisao = teclado("Digite a opera\u00E7\u00E3o desejada: ");
    switch (decisao) {
        case "+":
            adicao();
            break;
        case "-":
            subtracao();
            break;
        case "*":
            multiplicacao();
            break;
        case "/":
            divisao();
            break;
    }
}
