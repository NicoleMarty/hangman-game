# Bad Girls of History (hangman-game)

## What the game does
I chose a "Bad Girls of History" theme because I had just gotten a coffee table book on that topic and I thought I was being funny since it's a hangman situation.

The game uses key events to listen for the letters that the player will type.
If the name is "badgal", it displays like this when the game starts: _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: b a _ g a _.
Letters guessed are tracked for the player's reference.
It also tracks how many guesses left until you're theoretically hung.

If you lose an alert shows telling the player "off with your head!"
If you win an alert shows telling the player "you got away this time..."

After the user wins/loses the game automatically chooses another word for the player.

## High-level overview of code organization
├── assets
|  ├── css
|  |  └── style.css
|  ├── images
|  └── javascript
|     └── game.js
└── index.html

## Start-to-finish instructions on how to run the game

1. Open index.html in your browser
2. Press any key to start
3. Press a letter on your keyboard to make your guess
4. If you run out of guesses, it's off with your head! If you don't, you escaped that time.
5. After you win or lose, another game will automatically begin.
           
## Technologies used in to build Bad Girls of History
* Javascript
* HTML
* CSS

## My role in the game's development
I made dis. :sunglasses:

## Continuing development notes
Working on getting it to play "Heads Will Roll" by the Yeah Yeah Yeahs when the player loses.

