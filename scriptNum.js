let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesChance = 7;
let triesTaken = 0;
let start = true;

function guessNumber() {
  //Collect input from the user
  if (start) {
    let guess = document.querySelector(".inputs-Values").value;
    const finalOutput = document.querySelector(".final-output");
    const triesOutput = document.querySelector(".Tries-output");
    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess < 0 || guess > 100 || guess === "") {
      finalOutput.innerText = "Please enter a number between 1 and 100";
    }
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    else if (guess > randomNumber) {
      triesChance--;
      triesTaken++;
      finalOutput.innerText = "Number is too high, try again";
      triesOutput.innerText = `Number of Tries : ${triesTaken}`;
    }
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    else if (guess < randomNumber) {
      triesChance--;
      triesTaken++;
      finalOutput.innerText = "Number is too low, try again";
      triesOutput.innerText = `Number of Tries : ${triesTaken}`;
    }
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    else if (guess == randomNumber) {
      triesChance--;
      triesTaken++;
      finalOutput.innerText = `${guess} is correct . You Win !`;
      triesOutput.innerText = `Number of Tries : ${triesTaken}`;
      start = false;
    }
    if (guess != randomNumber && triesChance === 0) {
      finalOutput.innerText = `You Lose, the number was ${randomNumber}`;
      triesOutput.innerText = "";
      start = false;
    }
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  start = true;
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  guess = "";
  finalOutput.innerText = "Please enter a number between 1 and 100";
  triesOutput.innerText = "Number of Tries : " + triesChance;
  //Reset tries, and triesTaken by the user
  triesChance = 7;
  triesTaken = 0;
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
