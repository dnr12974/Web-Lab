let word = ['F', 'O', 'X'];
let guessed = ['_', '_', '_'];

function guessLetter(letter) {
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter && guessed[i] !== letter) {
      guessed[i] = letter;
      found = true;
    }
  }
  console.log(guessed.join(''));
  if (found) {
    console.log("Good guess!");
  } else {
    console.log("Try again.");
  }

  if (!guessed.includes('_')) {
    console.log("Congratulations! You've guessed the word.");
  }
}

guessLetter('F');
guessLetter('A');
guessLetter('O');
guessLetter('X');
/*OUTPUT:
F__
Good guess!
F__
Try again.
FO_
Good guess!
FOX
Good guess!
Congratulations! You've guessed the word.*/