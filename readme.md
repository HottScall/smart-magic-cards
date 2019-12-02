# Smart Magic Cards
Join Smart by performing a simple magic trick.

### Requirements
- Make sure all 4 suits of cards are rendered. There are 13 cards in each suit (♥,   ♣, ♦, ♠).
- Make sure the value for each card is visible on the initial render, basically move each card a bit so the card is readable.
- Add 3 buttons to the flow that will do 3 actions:
  - **Shuffle:** Randomly shuffles all cards.
  - **Show/Hide:** Hide all the cards by adding a class (CSS is already included).
  - **Magic:** Order the cards again by suit.
- When performing the trick, use the existing cards rather then create new ones.

### User Stories
- As a player I want to be able to be able to see a full deck of cards ordered by number and suit when I press “let’s get started”
- As a player I want to be able to shuffle a deck of cards
- As a player I want to be able to turn all cards face down 
- As a player I want to be able to turn a shuffled pack of cards back into their original state



### Flow of User Stories 

<h4 align="center"> As a player I want to be able to be able to see a full deck of cards ordered by number and suit when I press “let’s get started”  </h4>

  - Array of numbers and faces
  - Array of suits 
  - Combine both arrays
  - Render the cards to the DOM

<h4 align="center">  As a player I want to be able to shuffle a deck of cards </h4>

 - Player clicks Shuffle 
 - Array is sorted 
 - Take card 1 and card 2 
 - Randomly generate a new card for each 


<h4 align="center"> As a player I want to be able to turn all cards face down </h4>

 - Player clicks Face Down
 - Toggle to the back of the card 
 -  Access Css Element (hidden)
 - Return Css Element (hidden)
 - Change text on button from Card Down to Card Up when flipped (if else statement on the button name)

		
<h4 align="center"> As a player I want to be able to turn a shuffled pack of cards back into their original state </h4>

 - User Click Magic Button 
 - The button takes the current array (gameCard.Deck)
 - Sorts the array by comparing the cards (card1.suit, card2.suit)
 - Then sort cards by Value (card1.value < card2.value)
 - return new array 
 - render new array to the DOM 

#### Bonus points
  - Find a way to remove duplications in the `cards.scss` file and generate all the classes automatically for the cards: `.hearts-1`, `.hearts-2`, ... , `.spades-13`.
  - Add animation.
  - Do not use images for the cards, style them with CSS/SCSS only.
  - Uncomment the tests in the `cypress/integration/magic-trick.js` file and **make sure the tests pass**.
  - Add additional tests (we like test coverage).
  - Add some extra functionality, this is your chance to be creative. 😉

#### Example
<img src="assets/working-example.gif" alt="working-example">

## Getting Started
Follow these steps to get the project setup on your machine.

### Clone the repository
```
git clone git@github.com:smartpension/smart-magic-cards.git
```
_Note:_ You won't have access to commit to this repository. We suggest you download it or fork it.

<img src="assets/fork-example.png" alt="working-example" width="800">

### Install
```
yarn install
```

### Develop
In order to use the SASS compiler, run the following command.
```
yarn develop
```

### Test
In order to run the tests, run the folowing command.
```
yarn test
```
_Note:_ [Cypress.io](https://www.cypress.io/) is included in the project and all tests will run on Travis CI.
