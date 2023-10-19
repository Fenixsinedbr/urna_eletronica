// 

// //estrutura :switch-case(aula hj)                
// const opcao = 1;

// switch(opcao) {

//     case:1
//          console.log('opção1');
//           break; //pare
//     case:2
//          console.log('opção2');
//          break; //pare
//     default: //caso contrario
//     case:3
//          console.log('nenhuma dsa opções');

// }

// // equivilante a estrutura switch -case
// if (opcao === 1) {
//     console.log('opção é 1')
// }else if (opcao === 2) {
//     console.log ('opção é 2')
// } else {
//     console.log('nenhuma das opcões')
// }


// //estrutura de repetição: do-wilhe (faça enquanto)
// //do = faça



// do {
//     console.log('Instrução 1');
//     console.log('Instrução 2');
//     console.log('Instrução 3');
//     console.log('Instrução 4');
//     console.log('Instrução 5');
//     console.log('Instrução 6');
//  }while (opcao !== 0);

//  const opcao = 0;

//  //estrutura de repetição: while (enquanto)

//  while ('opcao !== 0') {
//     console.log('Instrução 1');
//     console.log('Instrução 2');
//     console.log('Instrução 3');
//     console.log('Instrução 4');
//     console.log('Instrução 5');
//     console.log('Instrução 6');
//  }




//configuração dos candidatos (votos zerados)
function urnaEletronica() {
    console.log('Iniciando o programa')



    let totalVotosCandidatos1 = 0;
    let totalVotosCandidatos2 = 0;
    let totalVotosCandidatos3 = 0;
    let totalVotosBrancos = 0;
    let totalVotosNulo = 0;

    const nomeCandidato1= prompt ('Digite o nome do Candidato 1')
    const nomeCandidato2= prompt ('Digite o nome do Candidato 2')
    const nomeCandidato3= prompt ('Digite o nome do Candidato 3')



    do {
        console.log('1=candidato1');
        console.log('2=candidato2');
        console.log('3=candidato3');
        console.log('5=voto em branco');
        console.log('8=voto nulo');
        console.log('0=encerrar');



        // sistema de loop para as votações ficarem voltando
        voto = parseInt(prompt('digite seu voto:'));

        if (voto === 1) {
            totalVotosCandidatos1++;
            console.log('o candidato 1 recebeu um voto');
        } else if (voto === 2) {
            totalVotosCandidatos2++;
            console.log('o candidato 2 recebeu um voto');
        } else if (voto === 3) {
            totalVotosCandidatos3++;
            console.log('o candidato 3 recebeu um voto');
        } else if (voto === 5) {
            totalVotosBrancos++;
            console.log('o candidato recebeu um voto');
        } else if (voto === 8) {
            totalVotosNulo++;
            console.log('o candidato recebeu um voto');
        } else if (voto === 0) {
            console.log('Encerrar a votação');
        } else {
            return;
        }

    } while (voto !== 0); // enquanto o voto for extritamente diferente de zero, repita a ação

    // somatoria de votos
    console.log('total de votos candidato 1:' + totalVotosCandidatos1);
    console.log('total de votos candidato 2:' + totalVotosCandidatos2);
    console.log('total de votos candidato 3:' + totalVotosCandidatos3);
    console.log('total de votos candidatos em Branco' + totalVotosBrancos);
    console.log('total de votos candidatos Nulos' + totalVotosNulo);



    let totalVotos = totalVotosCandidatos1 + totalVotosCandidatos2 + totalVotosCandidatos3 + totalVotosBrancos + totalVotosNulo
    console.log('total de votos candidato 1:' + (totalVotosCandidatos1 / totalVotos * 100) + '%');
    console.log('total de Votos Candidatos 2:' + (totalVotosCandidatos2 / totalVotos * 100) + '%');
    console.log('total de Votos Candidatos 3:' + (totalVotosCandidatos3 / totalVotos * 100) + '%');
    console.log('total de Votos em Brancos:' + (totalVotosBrancos / totalVotos * 100) + '%');
    console.log('total de Votos Nulos:' + (totalVotosNulo / totalVotos * 100) + '%');
    
    if (totalVotosCandidatos1 > totalVotosCandidatos2 && totalVotosCandidatos1 > totalVotosCandidatos3) {
        console.log('Candidato Eleito: candidato 1');
        console.log('Total de votos do ganhador: ' + (totalVotosCandidatos1 + totalVotosBrancos));
        console.log('Percentual de votos do ganhador:' + ((totalVotosCandidatos1 + totalVotosBrancos) / totalVotos * 100) + '%');

    } else if (totalVotosCandidatos2 > totalVotosCandidatos1 && totalVotosCandidatos2 > totalVotosCandidatos3) {
        console.log('Candidato Eleito: candidato 2');
        console.log('Total de votos do ganhador:' + (totalVotosCandidatos2 + totalVotosBrancos));
        console.log('Percentual de votos do ganhador:' +((totalVotosCandidatos2 + totalVotosBrancos)/ totalVotos * 100) + '%');

    } else if (totalVotosCandidatos3 > totalVotosCandidatos1 && totalVotosCandidatos3 > totalVotosCandidatos2) {
        console.log('Candidato Eleito: candidato 3');
        console.log('Total de votos do ganhador:' + (totalVotosCandidatos3 + totalVotosBrancos));
        console.log('Percentual de votos do ganhador:' + ((totalVotosCandidatos3 + totalVotosBrancos)/ totalVotos * 100) + '%');
    } else {
        console.log('Não há vencedor !')
    }






}














// // if (ganhador !== "Empate") {
//     console.log("Candidato ganhador: " + ganhador);
//     console.log("Total de votos: " + totalVotos);
//     console.log("Percentual de votos: " + calcularPercentual(totalVotosValidos, totalVotos) + "%");
//   } else {
//     console.log("Situação de empate.");
//   }



// console.log( 'Somatoria de votos do candidato 1:' + totalVotosCandidatos1 + totalVotosCandidatos2 + totalVotosCandidatos3 + totalVotosNulo + totalVotosBrancos);
// console.log('Percentual de votos do candidato 1:' + (totalVotosCandidatos1 / totalVotos*100)+'%')