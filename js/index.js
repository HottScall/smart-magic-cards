// User Stories
// As a player I want to be able to shuffle a deck of cards
// 1 - User click "shuffle" buttons
// 2 - The deck array then sorts the cards individually (slice?)
// 3 - The individual cards are then randomly mixed (math random?)
// 2 - The new cards are now generated and rendered in their new order (render on DOM)

// As a player I want to be able to turn all cards face down
// As a player I want to be able to turn a shuffled pack of cards back into their original state

const cardsWrapper = document.querySelector(".cards-wrapper");
const cards = [];
const suit = ["clubs", "spades", "diamonds", "hearts"];

function createCards() {
  for (let x = 0; x < suit.length; x++) {
    for (let i = 0; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suit[x]
      };
      cards.push(cardObject);
    }
  }
}

function deckRenderer() {
  cards.forEach((card, i) => {
    const positionFromLeft = i * 19;
    const cardElement = document.createElement("div");
    cardElement.setAttribute("data-value", card.value);
    cardElement.classList.add("card", `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function shuffleDeck() {
  const shuffled = cards.sort((card1, card2) => Math.random() - Math.random());
  console.log(shuffled);
}

function createButtons() {
  const button = document.createElement("Button");
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
  deckRenderer();
}

shuffleDeck();

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("shuffle-deck").addEventListener("click", shuffleDeck);
