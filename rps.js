function getRandom() {
  return parseInt(Math.floor(Math.random() * 3));
}

function computerPlay(compChoice) {
  if (compChoice === 0) {
    return "attack";
  } else if (compChoice === 1) {
    return "magic";
  } else {
    return "parry";
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "attack" && playerSelection === "parry") {
    computerLife -= 1;
    roundResult = `You parried the attack and break his composure! (Enemy action: ${computerSelection})`;
  } else if (computerSelection === "attack" && playerSelection === "magic") {
    playerLife -= 1;
    roundResult =
      `Your magic scythe spell is interrupted by opponent's strike! (Enemy action: ${computerSelection})`;
  } else if (computerSelection === "parry" && playerSelection === "attack") {
    playerLife -= 1;
    roundResult = `Your attack get parried and you can't hold your composure! (Enemy action: ${computerSelection})`;
  } else if (computerSelection === "parry" && playerSelection === "magic") {
    computerLife -= 1;
    roundResult = `Your magic scythe pierces through the shield! (Enemy action: ${computerSelection})`;
  } else if (computerSelection === "magic" && playerSelection === "attack") {
    computerLife -= 1;
    roundResult = `You strike your opponent and interrupted his spell! (Enemy action: ${computerSelection})`
  } else if (computerSelection === "magic" && playerSelection === "parry") {
    playerLife -= 1;
    roundResult = `You can't parry magic scythe! (Enemy action: ${computerSelection})`;
  } else {
    roundResult = `Draw! (Enemy action: ${computerSelection})`
  }
  results.textContent = roundResult;
  yourLife.textContent = `Your lifes: ${playerLife}`;
  tubaLife.textContent = `knight's lifes: ${computerLife}`;
  if (playerLife <= 0) {
    yourLife.textContent = "YOU DIED";
  }
  if (computerLife <= 0) {
    tubaLife.textContent = "VICTORY ACHIEVED";
  }
}

let playerLife = 5;
let computerLife = 5;
let roundResult;

function setSelectionAttack() {
  let playerSelection = "attack";
  let compChoice = getRandom();
  let computerSelection = computerPlay(compChoice);
  playRound(playerSelection, computerSelection);
}

function setSelectionMagic() {
  let playerSelection = "magic";
  let compChoice = getRandom();
  let computerSelection = computerPlay(compChoice);
  playRound(playerSelection, computerSelection);
}

function setSelectionParry() {
  let playerSelection = "parry";
  let compChoice = getRandom();
  let computerSelection = computerPlay(compChoice);
  playRound(playerSelection, computerSelection);
}

const attackbtn = document.querySelector("#attack");
const magicbtn = document.querySelector("#magic");
const parrybtn = document.querySelector("#parry");
const resetbtn = document.querySelector("#reset");
const results = document.querySelector(".move");
const tubaLife = document.querySelector(".tuba-life");
const yourLife = document.querySelector(".your-life");
attackbtn.addEventListener("click", setSelectionAttack);
magicbtn.addEventListener("click", setSelectionMagic);
parrybtn.addEventListener("click", setSelectionParry);
resetbtn.addEventListener("click", reset);

function reset() {
  playerLife = 5;
  computerLife = 5;
  yourLife.textContent = `Your lifes: ${playerLife}`;
  tubaLife.textContent = `knight's lifes: ${computerLife}`;
}
