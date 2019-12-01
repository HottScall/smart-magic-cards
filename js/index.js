// User Stories
// As a player I want to be able to turn all cards face down
// User clicks "face down" button
// As a player I want to be able to turn a shuffled pack of cards back into their original state

const cardsWrapper = document.querySelector(".cards-wrapper");
const buttonWrapper = document.querySelector(".btn-wrapper");
const getStarted = document.querySelector("#start-game");

var cardGame = (function() {
  const cards = [];
  const suit = ["clubs", "spades", "diamonds", "hearts"];

  return {
    cards: cards,
    suit: suit
  };
})();

console.log(cardGame.suit);
console.log(cardGame.cards);

function createCards() {
  for (let x = 0; x < cardGame.suit.length; x++) {
    for (let i = 0; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: cardGame.suit[x]
      };
      cardGame.cards.push(cardObject);
    }
  }
}

function deckRenderer() {
  cardGame.cards.forEach((card, i) => {
    const positionFromLeft = i * 19;
    const cardElement = document.createElement("div");
    cardElement.setAttribute("data-value", card.value);
    cardElement.classList.add("card", `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

function shuffleDeck() {
  const shuffled = cardGame.cards.sort(
    (card1, card2) => Math.random() - Math.random()
  );
  console.log(deckRenderer(shuffled));
  return deckRenderer(shuffled);
}

function createButtons() {
  const button = document.createElement("Button");
  button.setAttribute("type", "button");
  button.classList.add("button", "btn-lg", "btn-secondary");
  button.style.marginLeft = "15px";
  button.innerHTML = "shuffle";
  buttonWrapper.append(button);

  if (button.innerHTML === "shuffle") {
    button.addEventListener("click", shuffleDeck);
  }
}

function startGame() {
  createButtons();
  createCards();
  deckRenderer();
}

document.getElementById("start-game").addEventListener("click", startGame);

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
