function populate(){
    if(quiz.isEnded()){
        showScores();
}
  else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

  var choices = quiz.getQuestionIndex().choices;
  for(var i = 0; i < choices.length; i++){
  var element = document.getElementById("choice" + i);
  element.innerHTML = choices[i];
  guess("bt" + i, choices[i]);
}
showProgress();
 }
};
function guess(id, guess){
var button = document.getElementById(id);
button.onclick = function(){
    quiz.guess(guess);
    populate();
}
}
function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "perguntas" + currentQuestionNumber + "de" + quiz.questions.length;
}
function showScores(){
var gameOverHTML = "<h1>Result</h1>";
gameOverHTML +="<h2 id='Pontos'> sua pontuaçao:" + quiz.score + "</h2>";
var element = document.getElementById("quiz");
element.innerHTML = gameOverHTML;
}
//perguntas
var questions = [
new Question("De acordo com o portal g1, qual município tem mais morte por covid-19? <center><br><img src='image.rio.jpeg'/></center>",
["Rio de janeiro", "São gonçalo", "Duque de caxias", "Nova iguaçu"],"Rio de janeiro"),

new Question("Quais são os principais sintomas da covid-19 ?<center><br><img src='image.jpeg.jpg'/></center>",
["Diarréia", "Tontura", "Dor de cabeça", "Febre", "Cansaço", "Tosse Seca", "Perda de visão", "Falta de apetite","Sonolência"],"Tosse-seca"),

new Question("Em quantos dias os sintomas da covid-19 aperece após contrair o vírus?<center><br><img src='image.sint.jpeg'/></center>",
["10 a 20", "30 a 40", "3 a 14", "16 a 18"],"3 a 14 dias"),

new Question("Quais as pessoas mais vulneráveis ao covid-19?<center><br><img src='image.id.jpeg'/></center>",
["Crianças", "Idosos", "Adultos", "Recém nascido"],"Idosos"),

new Question("Qual a melhor forma de não se contaminar?<center><br><img src='image.prev.jpeg'/></center>",
["Trabalhando", "Ficando em casa", "Não lavar as mãos", "Usando máscara quando sair de casa"],"usando máscara quando sair de casa"),

new Question("Existe vacina para combater a covid-19?<center><br><img src='image.vac.jpeg'/></center>",
["Sim", "Não existe", "Existe más nunca usaram", "Nunca ouvi falar"],"Não Existe"),

new Question("Qual país teve mais morte por covid-19 ?",
["Brasil", "E.U.A", "Peru", "França"],"E.U.A"),

new Question("O uso do álcool 70 ajuda a combater a covid-19?",
["Não", "Sim", "Não sei", "Todas estão erradas"],"Sim"),

new Question("Existe cura para a covid-19?",
["Talvez", "Sim", "Não", "Todas estão incorretas"],"Sim"),

new Question("O que é pandemia?",
["Festa", "Viagem", "Grande surto que afeta uma região, que se espalha se não controlar", "Comida"],"Grande surto que afeta uma região, que se espalha se não controlar"),
];

var quiz = new Quiz(questions);
populate();