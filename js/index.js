const cardGame = (function () {
  const deck = [];
  const suit = ['clubs', 'spades', 'diamonds', 'hearts'];
  const buttons = ['Shuffle', 'Face Down', 'Magic'];
  const cardsWrapper = document.querySelector('.cards-wrapper');
  const buttonWrapper = document.querySelector('.btn-wrapper');
  const getStarted = document.querySelector('#start-game');

  return {
    deck: deck,
    suit: suit,
    buttons: buttons,
    cardsWrapper: cardsWrapper,
    buttonWrapper: buttonWrapper,
    getStarted: getStarted,
  };
}());

function createCards() {
  for (let x = 0; x < cardGame.suit.length; x++) {
    for (let i = 0; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: cardGame.suit[x],
      };
      cardGame.deck.push(cardObject);
    }
  }
}

function deckRenderer() {
  cardGame.deck.forEach((card, i) => {
    const positionFromLeft = i * 19;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    // Added a id attribute which has given each card an id upon initial render
    // Do something with this to render all cards back into order
    // Can you now sort them?
    cardElement.setAttribute('id', `${i}`);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardGame.cardsWrapper.append(cardElement);
  });
}

function shuffleDeck() {
  const shuffled = cardGame.deck.sort(
    (card1, card2) => Math.random() - Math.random(),
  );
  return deckRenderer(shuffled);
}

function faceDown() {
  const flipped = cardGame.cardsWrapper.classList.toggle('hidden');
  if (flipped === true) {
    document.getElementById('butt1').innerHTML = 'Face Up';
  } else {
    document.getElementById('butt1').innerHTML = 'Face Down';
  }
}

function magicTrick(){

  // User clicks magic button - done
  // the button takes the current array - cardGame.deck.
  // sorts the array by suit
  // argument a.suit < argument b.suit
  // sort the array by value
  // argument a.value < b.value
  //returns the new array
  // deckRenderer(sorted)
  // the original array is returned (sort?)

}

function createButtons() {
  cardGame.getStarted.remove();
  cardGame.buttons.forEach((button, i) => {
    const butt = document.createElement('Button');
    butt.classList.add('button', 'btn-lg', 'btn-secondary');
    butt.style.marginLeft = '15px';
    butt.innerHTML = cardGame.buttons[i];
    butt.setAttribute('id', `butt${i}`);
    cardGame.buttonWrapper.append(butt);
  });
}

function addEventListeners() {
  document.getElementById('butt0').addEventListener('click', shuffleDeck);
  document.getElementById('butt1').addEventListener('click', faceDown);
  document.getElementById('butt2').addEventListener('click', magicTrick);
}

function startGame() {
  createButtons();
  createCards();
  deckRenderer();
  addEventListeners();
}
document.getElementById('start-game').addEventListener('click', startGame);
