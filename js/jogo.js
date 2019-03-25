// ----------------------------
// a Aventura -----------------
// ----------------------------
let btnJogar = document.querySelector('.btn-jogar');

btnJogar.addEventListener('click', () => {
  mundoFantastico();
});

function mundoFantastico(){
alert("Seja bem vindo ao RPG Mundo Fantástico, você tem poder sobre seu destino!");
var nome = prompt("Digite seu nome: ");
var arma = prompt("Digite de 1 a 5 para escolher a arma que você começará aleatoriamente: ");
var escolha = prompt("Você estava andando e se deparou com uma bifurcação, você vai para direita ou esquerda? (Digite: direita ou esquerda)").toLowerCase();

// IF - ARMA
if(arma == 1){
var arma = "Estilingue";
}
else if(arma == 2){
var arma = "Martelo";
}
else if(arma == 3){
var arma = "Tamanco";
}
else if(arma == 4){
var arma = "Saco de batatas";
}
else if(arma == 5){
var arma = " Revólver";
}
else{
alert("Como você não digitou algo entre 1 e 5, então sua arma vai ser o que você escreveu.");
}

// IF - ESCOLHA DIREITA
if(escolha == "direita"){
alert("Você chegou num reino doce,e se deparou com um chocolate falante.");
var doce = prompt("Digite 1 para conversar, 2 para lutar, e 3 para fugir");
if(doce == 1){
alert("O chocolate falante disse: boa sorte "+nome+"! E logo em seguida, você se deparou com um castelo.");
var castelo = prompt("Digite 1 para entrar no castelo pelas portas da frente, 2 para entrar pelos fundos, e 3 para entrar pela janela");
if(castelo == 1){
alert("Você bateu na porta, o último hit do Safadão começou a tocar, e a porta se abriu.");
}
}


else if(doce == 2){
alert("Quando você foi atacá-lo, o chocolate falante se sentiu ameaçado, e lançou jatos de Nutella que te deixaram cego.");
alert("Enquanto você estava cego ele te prendeu em seu covil maldito de perdição e doçuras!!!");
alert("Você acordou, e estava amarrado em seu covil");
var vish = prompt("Digite 1 para chamá-lo, e 2 para tentar realizar a arriscada fuga.");
if(vish == 1)
var conta = prompt("Ele veio até você e disse: "+nome+", você já é conhecido pelas redondezas! Muahahaha. Meu nome é Thompson, e eu sou um chocolate matemático. Para você ser solto você precisa me responder algo. Quanto é 20 - 3 * 2 + 5?");
}



else if(doce == 3){
alert("Você fugiu, e quando parou de correr, viu que estava do lado de um rio de Nutella.");
}
}

// IF - ESCOLHA ESQUERDA
else if(escolha == "esquerda"){
alert("você chegou ao reino das sombras, e se deparou com um monstro");
var monstro = prompt("Digite 1 para lutar, e 2 para fugir");
if(monstro == 1){
alert("Você acertou o monstro com o seu "+arma+" e ele ficou atordoado.");
var acao1 = prompt("Digite 1 para matá-lo, e 2 para fugir");
}
else if(monstro == 2){
alert("Você fugiu e foi parar na casa do Lorde Malvadão");
    }
  }
}
