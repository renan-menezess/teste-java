/*
console.log("Mensagem BRAZIL");

console.clear();

console.log("@-@ Soma de dois números\n");

let primeiroNumero = parseInt(prompt("Digite p primeiro número:"));
let segundoNumero = parseInt(prompt("Digite o segundo número:"));

let soma = parseInt(primeiroNumero) + parseInt(segundoNumero);

console.log("Soma dos números: ", soma);*/

/*URNA ELETRONICA*/

function principal(){

let codigoVoto,
    votosTotais = 0,     
    votosCandidato1 = 0,
    votosCandidato2 = 0,
    votosCandidato3 = 0,
    votosBranco = 0,
    votosNulos = 0,
    votosTotaisGanhador = 0;

let 
    percentualVotosCandidato1 = 0.0, 
	percentualVotosCandidato2 = 0.0,
	percentualVotosCandidato3 = 0.0,
	percentualVotosBranco = 0.0,
	percentualVotosNulo = 0.0,
	percentualGanhador = 0.0;

let 
    nomeCandidato1 = prompt("Digite o nome do candidato"),
    nomeCandidato2 = prompt("Digite o nome do candidato"),
    nomeCandidato3 = prompt("Digite o nome do candidato"),
    nomeGanhador = "";

    
    
    opcaoInvalida = false;

    do {
        console.clear();
            if (opcaoInvalida) {
                console.log("Opção Inválida! \n\n");
                opcaoInvalida = false;
            }
        
        console.log(" Opções de Votos: \n\n");
        console.log("|-*| 1 |*-| ", nomeCandidato1, "\n");
        console.log("|-*| 2 |*-| ", nomeCandidato2, "\n");
        console.log("|-*| 3 |*-| ", nomeCandidato3, "\n");
        console.log("|-*| 9 |*-| Voto em branco \n");
        console.log("|-*| 8 |*-| Voto nulo \n");
        console.log("Digite o PIN para encerrar votação \n");
        
        codigoVoto=prompt("Digite agora o código do seu voto: ");

        if (codigoVoto !== null) {
            codigoVoto = parseInt(codigoVoto);
        } else {
            break;
        }
        
        switch(codigoVoto) {
            case 200333:
                somConfirmacao();
			    break;
		    case 1:
			    somConfirmacao();
                votosCandidato1++;
			    votosTotais++;
			    break;
		    case 2:
			    somConfirmacao();
                votosCandidato2++;
			    votosTotais++;
			    break;
		    case 3:
			    somConfirmacao();
                votosCandidato3++;
			    votosTotais++;
			    break;
		    case 5:
			    somConfirmacao();
                votosBranco++;
			    votosTotais++;
			    break;
		    case 8:
			    votosNulos++;
			    votosTotais++;
			    break;
		    default:
			    opcaoInvalida = true;
    }

    }   while (codigoVoto != 0) {
    
        if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
            nomeGanhador = nomeCandidato1;
            votosTotaisGanhador = votosCandidato1 + votosBranco;
        } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
            nomeGanhador = nomeCandidato2;
            votosTotaisGanhador = votosCandidato2 + votosBranco;
        } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosTotaisGanhador = votosCandidato3 + votosBranco;
        } else {
            empate = true;
        }
    }

    console.clear();
    console.log("** Resultado da apuração desta urna\n\n");

    if (votosTotais != 0) {
			
        percentualGanhador = ((votosTotaisGanhador) / (votosTotais)) * 100.0
    
        console.log("Votos totais: ", votosTotais, "\n");
        
        console.log("Votos no candidato ",nomeCandidato1, ": ", votosCandidato1, " (", 
            (votosCandidato1) / (votosTotais) * 100.0, "%)\n");
        
        console.log("Votos no candidato ",nomeCandidato2, ": ", votosCandidato2, " (", 
            (votosCandidato2) / (votosTotais) * 100.0, "%)\n");
        
        console.log("Votos no candidato ",nomeCandidato3, ": ", votosCandidato3, " (", 
            (votosCandidato3) / (votosTotais) * 100.0, "%)\n");
        
        console.log("Votos em branco: ", votosBranco, " (", 
            (votosBranco) / (votosTotais) * 100.0, "%)\n");
        
        console.log("Votos nulos: ", votosNulos, " (", 
            (votosNulos) / (votosTotais) * 100.0, "%)\n\n");
            
    } else {
        
        console.log("** Nenhum voto registrado\n");
        
    }

    if ( !empate) {
        console.log("** Ganhador nesta urna\n\n");
        console.log(nomeGanhador, " com ", votosTotaisGanhador, " votos (", percentualGanhador, "%) somados os votos em branco\n");
    } else {
        console.log("** Não foi possível determinar um ganhador nesta urna\n\n");
    }

}

function somConfirmacao() {
    let audio = new Audio('desafios-urna-eletronica_audio_confirma-urna.mp3');
	audio.play();
}

function boletimUrna(){
    let anoApuracao, diaMesApuracao,  horarioApuracao,  minutoAtual, segundoAtual, mesApuracao;
    return
}