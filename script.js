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

    
    
    let opcaoInvalida = false;
    let empate = false;

    let HoraInicio=HoraUrnaInicio();
    window.alert(HoraInicio);

    do {
        console.clear();
            if (opcaoInvalida) {
                console.log("Opção Inválida! \n\n");
                opcaoInvalida = false;
            }

        codigoVoto=prompt(" Opções de Votos: \n\n"+
        "|-*| 1 |*-| "+ nomeCandidato1, "\n"+
        "|-*| 2 |*-| "+ nomeCandidato2, "\n"+
        "|-*| 3 |*-| "+ nomeCandidato3, "\n"+
        "|-*| 9 |*-| Voto em branco \n"+
        "|-*| 8 |*-| Voto nulo \n"+
        "Digite o PIN para encerrar votação \n"+
        "Digite o seu voto:");

        if (codigoVoto !== null) {
            codigoVoto = parseInt(codigoVoto);
        } else {
            break;
        }
        
        switch(codigoVoto) {
            case 200333:
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

    }   while (codigoVoto != 200333) {

        HoraTermino=HoraUrnaTermino();
    
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

    if (votosTotais != 0) {
			
        percentualGanhador = ((votosTotaisGanhador) / (votosTotais)) * 100.0
    
        window.alert("** Resultado da apuração desta urna\n\n"+
        "Votos totais: ", votosTotais+ "\n"+
        ("Votos no candidato "+ nomeCandidato1 + ": "+ votosCandidato1 + " ("+ 
            ((votosCandidato1) / (votosTotais) * 100.0).toFixed(2) + "%)\n")
        
        ("Votos no candidato "+ nomeCandidato2 + ": "+ votosCandidato2 + " ("+ 
            ((votosCandidato2) / (votosTotais) * 100.0).toFixed(2) + "%)\n")
        
        ("Votos no candidato "+ nomeCandidato3 + ": "+ votosCandidato3 + " ("+ 
            ((votosCandidato3) / (votosTotais) * 100.0).toFixed(2) + "%)\n")
        
        ("Votos em branco: "+ votosBranco + " ("+ 
            ((votosBranco) / (votosTotais) * 100.0).toFixed(2) + "%)\n")
        
        ("Votos nulos: "+ votosNulos + " ("+ 
            ((votosNulos) / (votosTotais) * 100.0).toFixed(2) + "%)\n\n"));
            
    } else {
        
        window.alert("** Nenhum voto registrado\n");
        
    }

    if ( !empate) {
        window.alert("** Ganhador nesta urna\n\n"+
        nomeGanhador+ " com "+ votosTotaisGanhador+ " votos ("+ percentualGanhador+ "%) somados os votos em branco\n");
    } else {
        window.alert("** Não foi possível determinar um ganhador nesta urna\n\n")
    }
        window.alert(HoraTermino);
}

function somConfirmacao() {

    let audio = new Audio('desafios-urna-eletronica_audio_confirma-urna.mp3');
    timeout = setTimeout(500);
	audio.play();
}

function HoraUrnaInicio(){
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = (dataAtual.getMonth() + 1);
    var ano = dataAtual.getFullYear();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    return "A votação começou no dia:" + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.";
}
function HoraUrnaTermino(){
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = (dataAtual.getMonth() + 1);
    var ano = dataAtual.getFullYear();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    return "A votação acabou no dia: " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.";
}