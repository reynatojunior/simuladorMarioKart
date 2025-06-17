const player1 = {
    nome: "Mario",
    valocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
}
const player2 = {
    nome: "Luigi",
    valocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
}

async function rollDice() {
    return Math.floor(Math.random() * 6) +1;
}

async function getRandomBlock() {
    let random = Math.random();

    let result

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;

        case random < 0.66:
            result = "CURVA";
            break;

        default:
            result = "CONFRONTO";
            
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult}`);
}


async function playRaceEngine(character1, character2) {
    for (let round = 1; round <=5; round++) {
        console.log(`🏁 Round ${round}...`);

        //sortear bloco
        let block = await getRandomBlock();
        console.log(`🎲 Bloco ${block}`);
    }

        //rolar os dados

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let TotalTestSkill1 = 0;
        let TotalTestSkill2 = 0;

        if (block === "RETA") {
            TotalTestSkill1 = diceResult1 + character1.valocidade;
            TotalTestSkill2 = diceResult2 + character2.valocidade;

            await logRollResult(character1.nome, "VELOCIDADE", diceResult1, character1.valocidade);
            await logRollResult(character2.nome, "VELOCIDADE", diceResult2, character2.valocidade);
        }
        if (block === "CURVA") {
            TotalTestSkill1 = diceResult1 + character1.manobrabilidade;
            TotalTestSkill2 = diceResult2 + character2.manobrabilidade;

            await logRollResult(character1.nome, "MANOBRABILIDADE", diceResult1, character1.manobrabilidade);
            await logRollResult(character2.nome, "MANOBRABILIDADE", diceResult2, character2.manobrabilidade);
        }
        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.poder;
            let powerResult2 = diceResult2 + character1.poder;



            
        }

}
(async function main(){
    console.log(`🏁🚘Iniciando corrida entre ${player1.nome} e ${player2.nome}... \n`);
    await playRaceEngine(player1, player2);
})();
