//estrutura :switch-case(aula hj)                  

switch(opcao) {

    case 1:
    totalvotosCandidato1++
         console.log( "O Candidato 1 recebeu um voto");
         break ;
          break; //pare
    case 2:
    totalvotosCandidato2++
         console.log( "O Candidato 2 recebeu um voto");
         break ;
    case 3:
    totalvotosCandidato3++
         console.log( "O Candidato 3 recebeu um voto");
         break ;
    case 4:
    totalvotosBrancos++
        console.log( "O voto foi em  Branco");
        break ;
    case 5:
    totalvotosNulos++
    console.log( "O voto foi Nulo");
    case 0:
        totalvotos--; //O contador subtraido uma unidade. porque "0" não conta como votação
        console.log( "A votação foi encerrada pelo usuario");
         break; //pare
    default: //caso contrario
    return;
}

// equivilante a estrutura switch -case
if (voto === 1) {
    totalvotosCandidato1++;
    console.log( "O Candidato 1 recebeu um voto");
}else if (voto === 2) {
    totalvotosCandidato1++;
    console.log( "O Candidato 2 recebeu um voto");
} else {
   return;
}


//estrutura de repetição: do-wilhe (faça enquanto)
//do = faça



do {
    console.log('Candidato 1');
    console.log('Candidato 2');
    console.log('Candidato 3');
    console.log('VotoBranco');
    console.log('VotoNulo');
    console.log('encerrarVotação');
 }while (opcao !== 0);

 const opcao = 0;

 //estrutura de repetição: while (enquanto)

 while ('opcao !== 0') {
    console.log('Candidato  1');
    console.log('Candidato 2');
    console.log('Candidato  3');
    console.log('VotoBranco');
    console.log('VotoNulo');
    console.log('EncerrarVotação');
 }

 //function votacao() {}

//console.log('Início da votacao')

// Instruçoes Repetidas no Loop

console.log('|1| Candidato 1')
console.log('|2| Candidato 2')
console.log('|3| Candidato 3')
console.log('|4| Branco')
console.log('|5| Nulo')
console.log('|0| encerrar a votação')

Swich (VOTO){
    TotalVotosCandidato1++
    console.log( "O Candidato 1 recebeu um voto");
    break;
    defaut:
    return;
{}
}
Swich (VOTO){
    TotalVotosCandidato1++
    console.log( "O Candidato 1 recebeu um voto");
    break;

Swich (VOTO){
    TotalVotosCandidato2++
    console.log( "O Candidato 1 recebeu um voto");
    break;
Swich (VOTO){
    TotalVotosCandidato3++
    console.log( "O Candidato 1 recebeu um voto");
    break;
Swich (VOTO){
    TotalVotosbrancos++
    console.log( "Foi gerado 1 voto em Branco");
Swich (VOTO){
    TotalVotosNulos++
console.log( "Foi gerado 1 voto Nulo");
    break;
    
        
        
        
    defaut:
    
    

funcion mostraTexto(){
    # return "Texto da função MOSTRATEXTO";
    console.log("isso vem depois");
}
console.log(mostratexto);