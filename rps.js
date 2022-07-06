function getRandom() {
    return parseInt(Math.floor(Math.random() * 3));
  }

  function computerPlay(compChoice) {
    if (compChoice === 0) {
      return "ROCK";
    } else if (compChoice === 1) {
      return "PAPER";
    } else {
      return "SCISSOR";
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
      computerLife -= 1;
      roundResult="you win! paper beat rock!";
    } else if (
      computerSelection === "PAPER" &&
      playerSelection === "SCISSOR"
    ) {
      computerLife -= 1;
      roundResult="you win! scissor beat paper!";
    } else if (
      computerSelection === "SCISSOR" &&
      playerSelection === "ROCK"
    ) {
      computerLife -= 1;
      roundResult="you win! rock beat scissor!";
    } else if (computerSelection === playerSelection) {
      roundResult="draw!";
    } else {
      playerLife -= 1;
      roundResult=`you lose! ${computerSelection.toLowerCase()} beat ${playerSelection.toLowerCase()}!`;
    }
    results.textContent=roundResult;
    yourLife.textContent=`Your lifes: ${playerLife}`;
    tubaLife.textContent=`knight's lifes: ${computerLife}`;
    if (playerLife === 0) {
      yourLife.textContent='YOU DIED';
    } 
    if (computerLife === 0) {
      tubaLife.textContent='VICTORY ACHIEVED';
    }
  }

  let playerLife = 5;
  let computerLife = 5;
  let roundResult;

  function setSelectionRock() {
    let playerSelection = 'ROCK';
    let compChoice = getRandom();
    let computerSelection = computerPlay(compChoice);
    playRound(playerSelection, computerSelection);
  }

  function setSelectionPaper() {
    let playerSelection = 'PAPER';
    let compChoice = getRandom();
    let computerSelection = computerPlay(compChoice);
    playRound(playerSelection, computerSelection);
  }

  function setSelectionScissor() {
    let playerSelection = 'SCISSOR';
    let compChoice = getRandom();
    let computerSelection = computerPlay(compChoice);
    playRound(playerSelection, computerSelection);
  }

  const attackbtn=document.querySelector('#attack');
  const magicbtn=document.querySelector('#magic');
  const parrybtn=document.querySelector('#parry');
  const resetbtn=document.querySelector('#reset');
  const results=document.querySelector('.move');
  const tubaLife=document.querySelector('.tuba-life');
  const yourLife=document.querySelector('.your-life');
  attackbtn.addEventListener('click', setSelectionRock)
  magicbtn.addEventListener('click', setSelectionPaper)
  parrybtn.addEventListener('click', setSelectionScissor)
  resetbtn.addEventListener('click', reset)

  function reset() {
    playerLife = 5;
    computerLife = 5;
    yourLife.textContent=`Your lifes: ${playerLife}`;
    tubaLife.textContent=`knight's lifes: ${computerLife}`;
  }
  

