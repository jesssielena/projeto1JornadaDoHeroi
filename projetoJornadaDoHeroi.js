
const prompt = require('prompt-sync')();

historiaDaJornada =  prompt(`
História da líder Septima Zenobia\n
Zenobia, rainha regente de Palmira (cidade localizada na província da Síria) 
liderou seus exércitos montada em um cavalo 
e usando uma armadura completa na busca por derrotar
as legiões romanas sob o reino de Claudio.
Claudio estava em um período de grave crise em seu império.
Isso possibilitou que ela, utilizando de seus conhecimentos militares,
invadisse terras pertencentes à Roma e após, o Egito. 
Estendendo então a fronteira de seu Império do Eufrates ao Nilo.\n`);


console.log("Responda 1 para Sim ou 0 para Não\n");


let pergunte1 = +prompt("Zenobia conseguiu liderar seus exércitos montada em um cavalo? ");
let pergunte2 = +prompt("Ela possuia conhecimentos militares e os colocou em prática em suas estratégias? ");
let pergunte3 = +prompt("Claudio, seu inimigo, liderava um império em crise? ");
let pergunte4 = +prompt("Zenobia conseguiu assim, invadir as terras pertecentes à Roma? ");
let pergunte5 = +prompt("Ela pôde então, estender as fronteiras de seu Império do rio Eufrates ao Nilo? ");
let total = pergunte1 + pergunte2 + pergunte3 + pergunte4 + pergunte5;


if(total=== 5){

    console.log("Zenobia venceu a batalha! "); 
    
}else if(total === 4){

console.log("Zenobia consegue invadir o império.");
 
}else if(total === 3){

console.log("Zenobia quase consegue alcançar o império de Claudio. ");

}else if(total >= 2 && total !=0){

    console.log("Zenobia e seus exércitos conseguiram escapar e voltar para sua cidade! ");

}else{

console.log("Zenobia e seus exércitos foram destruídos!!");
}

