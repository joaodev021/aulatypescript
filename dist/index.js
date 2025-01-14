"use strict";
let numero = 20; // Tipagem inferida
const pi = 3.1415;
let nome = "Joao"; // Tipagem explícita
let correta = true;
let resultado = numero * pi;
//NOTE: const misto: any[] = ["Walisson", 27, 1, 1.77, {}, () => {}, true]
//NOTE: Evitar ao máximo utilizar any
const idades = [];
idades.push(23);
idades.push(33);
idades.push(13);
idades.push(45);
idades.push(15);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
const pessoaTupla = ["João", 27];
const pessoa = {
    nome: "João",
    idade: 27,
    altura: 1.71,
};
pessoa.profissao = "Desenvolvedor";
console.log(pessoa);
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, "greater");
console.log("Numero escolhido: ", numeroEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
const outraPessoa = {
    altura: 1.71,
};
const outraPessoa2 = {
    nome: "Nielle",
    idade: 28,
    altura: 1.65,
    profissao: "CS",
};
const pessoas = {
    "123.456.789-00": {
        nome: "Fulano",
        idade: 27,
        altura: 1.71,
    },
    "123.456.789-01": {
        nome: "Fulana",
        idade: 29,
        altura: 1.61,
    },
};
