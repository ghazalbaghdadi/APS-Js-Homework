let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesChance = 7;
let triesTaken = 0;
let startGame = true;

function guessNumber() {
  //Collect input from the user
  if (startGame) {
    let guess = document.querySelector(".inputs-Values").value;
    const finalOutput = document.querySelector(".final-output");
    const triesOutput = document.querySelector(".Tries-output");
    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess < 0 || guess > 100 || guess === "") {
      finalOutput.innerText = "Enter a number between 1 and 100 !";
    }
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    else if (guess > randomNumber) {
      triesChance = -1;
      triesTaken += 1;
      finalOutput.innerText = "Number is too high, try again";
      triesOutput.innerText = `Number of Tries : ${triesTaken}`;
    }
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    else if (guess < randomNumber) {
      triesChance = -1;
      triesTaken += 1;
      finalOutput.innerText = "Number is too low, try again";
      triesOutput.innerText = `Number of Tries : ${triesTaken}`;
    }
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    else if (guess == randomNumber) {
      triesChance = -1;
      triesTaken += 1;
      finalOutput.innerText = `${guess} is correct . You Win !!`;
      triesOutput.innerText = `Number of Tries : ${triesTaken}`;
      startGame = false;
    }
    if (guess != randomNumber && triesTaken === 7) {
      finalOutput.innerText = `You Lose, the number was ${randomNumber}`;
      triesOutput.innerText = `Number of Tries : ${triesTaken}`;
      startGame = false;
    }
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset tries, and triesTaken by the user
  triesChance = 7;
  triesTaken = 0;
  //Reset users input field
  document.querySelector(".inputs-Values").value = " ";
  document.querySelector(".final-output").innerText =
    "Please enter a number between 1 and 100";
  document.querySelector(".Tries-output").innerText =
    "Number of Tries : " + triesTaken;
  startGame = true;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
