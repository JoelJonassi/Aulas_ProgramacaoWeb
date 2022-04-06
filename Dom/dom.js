//console.log(document.querySelector(".message").textContent);
//document.querySelector(".message").textContent = 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guessNumber = Number(document.querySelector('.guess').value);
    
    if(!guessNumber) {
        displayMessage ("No Number");

    }else if(guessNumber === secretNumber){
        displayMessage("Correct Number");

        document.querySelector(".number") = secretNumber;
        document.querySelector('body').style.backgroundColor = '#7dd56f';
        if(score > 1) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        } 
    }
    else if (score > 1){
            displayMessage(guessNumber > secretNumber ? "too high" : "too low");
            score--,
            document.querySelector(".score")
  .textContent = score;
  } else {
      displayMessage('You lose');
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = secretNumber;
  }
});

document.querySelector(".again").addEventListener("click", function(){
    socre = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("start guessing ..");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelectort("body").style.backgroundColor = "#222";
})