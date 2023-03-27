// variáveis 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let raqueteComp = 10;
let raqueteAlt = 90;
let chanceDeErrar = 0;
// variáveis da velocidade da bolinha
let velocidadeXBol = 6;
let velocidadeYBol = 6;

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

// variáveis do oponente
let xRaqueteOpo = 585;
let yRaqueteOpo = 150;

let colidiu = false;

// placar do jogo
let meusPontos = 0;
let pontosOpo = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOpo, yRaqueteOpo);
  //movimentaRqtOpo2Players();
  verificaColisaoRaquete(xRaqueteOpo, yRaqueteOpo);
  incluiPlacar();
  marcaPonto();
  movimentaRqtOpo()
  bolinhaNaoFicaPresa();
 
  
}


function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBol;
  yBolinha += velocidadeYBol;
}

function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0)
    {
      velocidadeXBol *= -1;
    }
  
  if(yBolinha + raio > height || yBolinha - raio < 0)
    {
      velocidadeYBol *= -1;
    }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComp, raqueteAlt);
}



function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  
  }
}

function verificaColisaoRaquete(){
  if( xBolinha - raio < xRaquete + raqueteComp && yBolinha - raio < yRaquete + raqueteAlt && yBolinha + raio > yRaquete)
    {
      velocidadeXBol *= -1;
    }
}


function verificaColisaoRaquete(x, y){
  
  colidiu = collideRectCircle(x, y, raqueteComp, raqueteAlt, xBolinha, yBolinha, raio);
  
  if (colidiu)
    {
      velocidadeXBol *= -1;
    }
}



function movimentaRqtOpo()
{
  velocidadeYOpo = yBolinha - yRaqueteOpo - raqueteComp / 2 - 30;
  yRaqueteOpo += velocidadeYOpo + chanceDeErrar;
  calculaChanceDeErrar();
}


function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(0,0,128));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(0,0,128));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOpo, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590)
    {
      meusPontos += 1;
    }
  
  if (xBolinha < 10)
    {
      pontosOpo += 1;
    }
}

function movimentaRqtOpo2Players(){
  if(keyIsDown(87)){
    yRaqueteOpo -= 10;
  }
  
  if(keyIsDown(83)){
    yRaqueteOpo += 10;
  
  }
} 

function calculaChanceDeErrar() {
  if (pontosOpo >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}




