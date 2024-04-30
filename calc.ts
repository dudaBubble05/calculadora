const teclado = require(`prompt-sync`)();

let numeroUm: number = 0; 
let numeroDois: number = 0;
let resultado: number = 0;

function escolha(): void{
    console.log(`----------Escolha---------`);
    console.log(`0 - Sair`);
    console.log(`1 - Calculadora`);
    let opcao: number = parseInt(teclado(`Digite sua escolha: `));

    switch (opcao){
        case 0 : sair(); break;
        case 1 : calcular; break;
        default: break;
    }
}

function sair():void{
    console.log(`Fim de programa...`);
    process.exit(0);
}

function adicao(): void{
    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm + numeroDois;
    console.log(`O valor da soma de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${resultado}`);
}

function subtracao(): void{
    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm - numeroDois;
    console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${resultado}`);
}

function multiplicacao(): void{
    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm * numeroDois;
    console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${resultado}`);
}

function divisao():void{
    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm / numeroDois;
    console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} `);
    console.log(`é ${resultado}`);
}

function calcular():void{
    console.clear();
    
    console.log(`----------Selecione a operação---------`);
    console.log();
    console.log(`+ - Adição`);
    console.log(`- - Subtração`);
    console.log(`+ - Divisão`);
    console.log(`+ - Multiplicação`);
    let decisao = teclado (`Digite a operação desejada: `);

    switch (decisao){
        case `+`: adicao(); break;
        case `-`: subtracao(); break;
        case `*`: multiplicacao(); break;
        case `/`: divisao(); break;
    }
}