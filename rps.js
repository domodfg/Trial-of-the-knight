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
      playerScore += 1;
      roundResult="you win! paper beat rock!";
    } else if (
      computerSelection === "PAPER" &&
      playerSelection === "SCISSOR"
    ) {
      playerScore += 1;
      roundResult="you win! scissor beat paper!";
    } else if (
      computerSelection === "SCISSOR" &&
      playerSelection === "ROCK"
    ) {
      playerScore += 1;
      roundResult="you win! rock beat scissor!";
    } else if (computerSelection === playerSelection) {
      roundResult="draw!";
    } else if (
      playerSelection !== "ROCK" &&
      playerSelection !== "SCISSOR" &&
      playerSelection !== "PAPER"
    ) {
      roundResult="please input rock/scissor/paper";
    } else {
      computerScore += 1;
      roundResult=`you lose! ${computerSelection.toLowerCase()} beat ${playerSelection.toLowerCase()}!`;
    }
    results.textContent=roundResult;
    container.appendChild(results);
  }

  let playerScore = 0;
  let computerScore = 0;
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
  attackbtn.addEventListener('click', setSelectionRock)
  magicbtn.addEventListener('click', setSelectionPaper)
  parrybtn.addEventListener('click', setSelectionScissor)
  const results=document.querySelector('.move');
  const container=document.querySelector('.score')

