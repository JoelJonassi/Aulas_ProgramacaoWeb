const secretNumberText = document.querySelector(".number");
const scoreText = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    displayMessage("🛑 No Number!");
  } else if (guessNumber === secretNumber) {
    displayMessage("🎉 Correct number");

    secretNumberText.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNumber != secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber > secretNumber ? "📈 too high" : "📉 too low");
      score--;
      scoreText.textContent = score;
    }
  } else {
    displayMessage("☄️ You loose!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing..");
  secretNumberText.textContent = "?";
  scoreText.textContent = "score";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  secretNumberText.style.width = "15rem";
});
