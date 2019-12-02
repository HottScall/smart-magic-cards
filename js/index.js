// User Stories
// As a player I want to be able to turn a shuffled pack of cards back into their original state

const cardsWrapper = document.querySelector(".cards-wrapper");
const buttonWrapper = document.querySelector(".btn-wrapper");
const getStarted = document.querySelector("#start-game");

var cardGame = (function() {
  const cards = [];
  const suit = ["clubs", "spades", "diamonds", "hearts"];
  const buttons = ["Shuffle", "Face Down", "Magic"];

  return {
    cards: cards,
    suit: suit,
    buttons: buttons
  };
})();

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
  return deckRenderer(shuffled);
}

function faceDown() {
  const flipped = cardsWrapper.classList.toggle("hidden");
  if (flipped == true) {
    document.getElementById("butt1").innerHTML = "Face Up";
  } else {
    document.getElementById("butt1").innerHTML = "Face Down";
  }
}

function createButtons() {
  getStarted.remove();
  cardGame.buttons.forEach((button, i) => {
    const butt = document.createElement("Button");
    butt.classList.add("button", "btn-lg", "btn-secondary");
    butt.style.marginLeft = "15px";
    butt.innerHTML = cardGame.buttons[i];
    butt.setAttribute("id", `butt${i}`);
    buttonWrapper.append(butt);
  });
}

function addEventListeners() {
  document.getElementById("butt0").addEventListener("click", shuffleDeck);
  document.getElementById("butt1").addEventListener("click", faceDown);
  // document.getElementById("butt2").addEventListener("click", magicTrick);
}

function startGame() {
  createButtons();
  createCards();
  deckRenderer();
  addEventListeners();
}
document.getElementById("start-game").addEventListener("click", startGame);
