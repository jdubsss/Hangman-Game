/*
This is a hangman game.

User needs to guess the word presented to them. The user can only see a topic and a series of blank spaces they need to fill. The user will press letters on the keyboard and if the letter is part of the work the letter blanks in the word get filled up by the selected letter.

The User has a limited number of guesses until the game is over.
*/

/*start by organizing the needed variables:
user Inputs
win counter
word array
A-Z letter array
random number for computer to select words?
guesses remaining,
completed words?
*/




/*variables for game*/
var userInput = document.getElementById('userInput'),
        wins = document.getElementById('wins'),
        words = ["surfing", "aloha", "Kamehameha"],
        winCount = 0,
        lives = 5,
        lettersToGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        randNumber,
        currentWord;




/* computers chooses a word for use to guess--------------*/
        currentWord = words[Math.floor(Math.random() * words.length)];

 /*Lets user know how may lives they have left---------------*/       
        lives.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';


        document.getElementById("letter").value = '';





        /*content below is from the psychic game...used as staring point*/
            


        computerInput.textContent = compChoice;
        result = userChoice + compChoice;
            
        if (userChoice === compChoice) winCount++
        else loseCount++
            
        wins.textContent = winCount;
        loses.textContent = loseCount;
		
    document.onkeyup = function(event) {
        if (event.key === "a" || event.key === "b" || event.key === "c"  || event.key === "d" || event.key === "e" || event.key === "f" || event.key === "g" || event.key === "h" || event.key === "i" || event.key === "j" || event.key === "k" || event.key === "l" || event.key === "m" || event.key === "n" || event.key === "o" || event.key === "p" || event.key === "q" || event.key === "r" || event.key === "s" || event.key === "t" || event.key === "u" || event.key === "v" || event.key === "w" || event.key === "x" || event.key === "y" || event.key === "z") {
            userChoice = userInput.textContent = event.key
        

        
        }
      
    
    }