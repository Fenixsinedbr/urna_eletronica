//Urna Eletronica

//Declaração de variaveis

function urnaEletronica() {

    let
        codigoVoto,
        votosTotais = 0,
        votosCandidato1 = 0,
        votosCandidato2 = 0,
        votosCandidato3 = 0,
        votosBranco = 0,
        votosNulo = 0,
        votosTotaisGanhador = 0,
        percentualGanhador = 0.0,

        nomeCandidato1,
        nomeCandidato2,
        nomeCandidato3,
        nomeGanhador = "",
      
        senhaMesario = 123456,
        opcaoInvalida = false,
        iniciaVotacao = false,
        situacaoEmpate = false,
        opcaoFim = "N",
      
        dataHoraInicio,
        dataHoraFim;
 console.log('Início do programa');

    console.clear();
    console.log('** CONFIGURAÇÃO DA URNA **');

    senhaMesario = parseInt(prompt('Digite sua senha de mésário:'));

  do {
        if (opcaoInvalida) {
            console.log("Opção inválida!");
        }

        nomeCandidato1 = prompt(
            "** Configuração da urna\n\n" +
            "Digite o nome do(a) 1º candidato(a):");
        if (usuarioCancelou(nomeCandidato1)) {
            break;
        }

        nomeCandidato2 = prompt(
            "** Configuração da urna\n\n" +
            "Digite o nome do(a) 2º candidato(a):");
        if (usuarioCancelou(nomeCandidato2)) {
            break;
        }

        nomeCandidato3 = prompt(
            "** Configuração da urna\n\n" +
            "Digite o nome do(a) 3º candidato(a):");
        if (usuarioCancelou(nomeCandidato3)) {
            break;
        }
    } while (!iniciarVotacao);
   while (!confirm('Se os nomes dos candidatos estão corretos, clique OK para continuar ou CANCELAR para voltar e digitar novamente'));
    

    dataHoraInicio = dataHoraAtual();



 // se houver votação
    if (totalVotos > 0) {

        console.log('Total de votos do candidato(a) ' + nomeCandidato1 + ': ' + votosCandidato1 + ' votos (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato(a) ' + nomeCandidato2 + ': ' + votosCandidato2 + ' votos (' + (votosCandidato2 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato(a) ' + nomeCandidato3 + ': ' + votosCandidato3 + ' votos (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos brancos: ' + votosBrancos + ' votos (' + (votosBrancos / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos nulos: ' + votosNulos + ' votos (' + (votosNulos / totalVotos * 100).toFixed(2) + '%)');

        // determinação do ganhador
      
        if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
            nomeGanhador = nomeCandidato1;
            votosGanhador = votosCandidato1 + votosBrancos;
        } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
            nomeGanhador = nomeCandidato2;
            votosGanhador = votosCandidato2 + votosBrancos;
        } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
            nomeGanhador = nomeCandidato3;
            votosGanhador = votosCandidato3 + votosBrancos;
        } else {
            ganhador = false;
        }

  // exibição do ganhador
        console.log('-------');
        if (ganhador) {
            console.log('O ganhador desta urna foi ' + nomeGanhador + ' com ' + votosGanhador + ' votos (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
        } else {
            console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos');
        }
        
    } else {
        console.log('Não houve votação  nesta urna');
    }

    console.log('Fim do programa');
