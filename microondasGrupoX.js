/*
Aula 09 - 26/08/2021
Checkpoint - Microondas
Integrantes:
Anna Karla Americo
Guilherme Chehade
Luana Borges
Ricardo Ramalho Del Bianco
Wállex de França
Weverton Gois
*/


//aqui o cliente vai clicar no botão do alimento e/ou definir o tempo que deseja
// se o cliente não quiser definir o tempo, tempoCliente deve ser 0
var alimento = "Pipoca";
var tempoCliente = 0;
   
// definindo tempo padrão e código de cada alimento, dependendo do que o cliente selecionar. Decidimos usar o switch, porém, ainda não entendi completamente o uso do mesmo.

switch (alimento){
    case "Pipoca":
        tempoPadrao = 10;
        codAlimento = 1;
        break;
    case "Macarrão":
        tempoPadrao = 8;
        codAlimento = 2;
        break;
    case "Carne":
        tempoPadrao = 15;
        codAlimento = 3;
        break;
    case "Feijão":
        tempoPadrao = 12;
        codAlimento = 4;
        break;
    case "Brigadeiro":
        tempoPadrao = 8;
        codAlimento = 5;
        break;
    default:
        tempoPadrao = tempoCliente;
        codAlimento = 0;
}

// se o cliente não definir o tempo, utiliza o tempo padrão
if (tempoCliente == 0){
    tempoCliente = tempoPadrao
}

// mostra pro cliente o tempo padrão e o tempo utilizado
console.log("Tempo Padrão = "+tempoPadrao+" segundos")
console.log("Tempo Utilizado = "+tempoCliente+" segundos")

// função que retorna mensagens de exceções
function microondas(codAlimento,tempoCliente,tempoPadrao) {
    if (codAlimento == 0) {
        console.log("Prato Inexistente");
    } else if (tempoCliente >= tempoPadrao * 3) {
        console.log("kabumm");
    } else if (tempoCliente >= tempoPadrao * 2){
        console.log("A comida queimou");
    } else if (tempoCliente < tempoPadrao) {
        console.log("Tempo Insuficiente");
    }

    console.log("Prato pronto, bom apetite!!!")
}

// chama a função com os parâmetros definidos no começo do código
    microondas(codAlimento,tempoCliente,tempoPadrao);