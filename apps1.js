
var scoreCount = 0;
var clickCount = 0;

const button = document.getElementById("clik");
button.addEventListener("click", () => {
  let random = (Math.floor(Math.random() * 6) + 1);

  if (clickCount == 0) {
    document.getElementById('diceF').style.display = "block";
    document.getElementById('diceF').src = "images/dice.png";
    document.getElementById('score').innerHTML = ('score: 0');
    document.getElementById('clik').innerHTML = ('Roll');
    document.getElementById('status').innerHTML = ('');
    clickCount++;
    scoreCount = 0;
    return;
  }
  else if (clickCount > 0 && scoreCount + random >= 20 && random != 1) {
    document.getElementById('diceF').src = `images/dice-${random}.png`;
    document.getElementById('score').innerHTML = (`score: ${scoreCount + random}`);
    document.getElementById('status').innerHTML = ('You win!');
    document.getElementById('clik').innerHTML = ('Click here to play again');
    scoreCount = 0;
    clickCount = 0;
    return;
  }
  else if (clickCount > 0 && random !== 1 && scoreCount + random < 20) {
    scoreCount = scoreCount + random;
    document.getElementById('diceF').src = `images/dice-${random}.png`;
    document.getElementById('score').innerHTML = (`score: ${scoreCount}`);
    document.getElementById('clik').innerHTML = ('Roll');
    clickCount++
    return;
  }

  else if (clickCount > 0 && random == 1) {
    scoreCount = scoreCount + random
    document.getElementById('diceF').src = `images/dice-${random}.png`;
    document.getElementById('score').innerHTML = ('score:0');
    document.getElementById('status').innerHTML = ('You lose!');
    document.getElementById('clik').innerHTML = ('Click here to play again');
    scoreCount = 0;
    clickCount = 0;
    return;
  }







}
)

