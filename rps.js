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
      return roundResult="you win! paper beat rock!";
    } else if (
      computerSelection === "PAPER" &&
      playerSelection === "SCISSOR"
    ) {
      playerScore += 1;
      return roundResult="you win! scissor beat paper!";
    } else if (
      computerSelection === "SCISSOR" &&
      playerSelection === "ROCK"
    ) {
      playerScore += 1;
      return roundResult="you win! rock beat scissor!";
    } else if (computerSelection === playerSelection) {
      return roundResult="draw";
    } else if (
      playerSelection !== "ROCK" &&
      playerSelection !== "SCISSOR" &&
      playerSelection !== "PAPER"
    ) {
      return roundResult="please input rock/scissor/paper";
    } else {
      computerScore += 1;
      return roundResult=`you lose! ${computerSelection.toLowerCase()} beat ${playerSelection.toLowerCase()}!`;
    }
  }

  let playerScore = 0;
  let computerScore = 0;
  let roundResult;

  function game() {
    for (let i = 0; i < 5; i++) {
      

      console.log(roundResult)
      if (i === 4 && playerScore > computerScore) {
        console.log(`You Win! ${playerScore} vs ${computerScore}`);
      } else if (i === 4 && playerScore < computerScore) {
        console.log(`You Lose! ${playerScore} vs ${computerScore}`);
      } else if (i === 4 && playerScore === computerScore) {
        console.log(`Draw! ${playerScore} vs ${computerScore}`);
      }
    }
  }

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