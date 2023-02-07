const arr = ["Rock", "Paper", "Scissors"];


function getComputerChoice(arr)
{
let x =  Math.floor(Math.random() * 3);
return arr[x];
}

function getPlayerChoice(option_arr)
{
    let playerInput;
    let newInput;

    do
    {
        playerInput = prompt("Rock, Paper, or Scissors?: \n");
        newInput = playerInput.charAt(0).toUpperCase() + playerInput.toLowerCase().slice(1);
    } while (arr.includes(newInput) == false)

    return newInput;
}

function playRound(pChoice, cChoice)
{
    //Player win
    if ((pChoice == "Rock" && cChoice == "Scissors") || 
    (pChoice == "Scissors" && cChoice == "Paper") ||
    (pChoice == "Paper" && cChoice == "Rock"))
    {
        console.log("Player Wins!\n");
        return 1;
    }
    else if (pChoice == cChoice) //Tie
    {
        console.log("Tie!\n");
        return 0;
    }
    else //Computer wins
    {
        console.log("Computer Wins!\n");
        return -1;
    }
}

function playGame(arr)
{
    let cChoice;
    let pChoice;
    let winLoss;
    let pWins;
    let cWins;

    for (let i = 1; i < 6; i++)
    {
        console.log("Round: " + i);
        cChoice = getComputerChoice(arr);
        pChoice = getPlayerChoice(arr);

        console.log(`Player Choice: ${pChoice}\nComputer Choice: ${cChoice}\n`)
        winLoss = playRound(pChoice, cChoice);

        switch(winLoss)
        {
            case 1:
                pWins++;
                break;
            case -1:
                cWins;
                break;
        }
    }
    if (pWins > cWins)
    {
        console.log("Player Wins the Entire Game!\n");
    }
    else
    {
        console.log("Computer Wins the Entire Game!\n");
    }
}

playGame(arr);
