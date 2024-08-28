let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "Divertidamente 2";
    } else {
      return "Como Treinar o seu Dragão";
    }
  } else {
    return "Encanto";
  }
}
