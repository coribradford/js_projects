const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock') {
        return 'rock'
    } else if (userInput === 'paper') {
        return 'paper'
    } else if (userInput === 'scissors') {  
        return 'scissors'
    } else if (userInput === 'bomb') {
        return 'bomb'
    } else {
        console.log('Please enter rock, paper, or scissors.')
    }
};

const getComputerChoice = () => {
let num = Math.floor(Math.random()*3)
    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Game was a tie"
    } 
    if (userChoice === 'bomb') {
        return 'Surprise bomb! User wins!'
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
        return "Paper covers rock, Computer wins."
        } else if (computerChoice === 'scissors') {
        return "Rock crushes scissors, User wins!"
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
        return 'Paper covers rock, User wins!'
        } else if (computerChoice === 'scissors') {
        return 'Scissors cut paper, computer wins.'
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
        return 'Rock crushes scissors, Computer wins.'
        } else if (computerChoice === 'paper') {
        return 'Scissors cut paper, User wins!'
        } 
    }
}

const playGame = () => {
    userChoice = getUserChoice('scissors')
    computerChoice = getComputerChoice()
    console.log(`User choice: ${userChoice} \nComputer choice: ${computerChoice}`)
    let winner = determineWinner(userChoice, computerChoice)
    console.log(winner)
}

playGame()
  