const cardGame = (function () {
  const cards = [];
  const suit = ['clubs', 'spades', 'diamonds', 'hearts'];
  const buttons = ['Shuffle', 'Face Down', 'Magic'];
  const cardsWrapper = document.querySelector('.cards-wrapper');
  const buttonWrapper = document.querySelector('.btn-wrapper');
  const getStarted = document.querySelector('#start-game');

  return {
    cards: cards,
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
      cardGame.cards.push(cardObject);
    }
  }
}

function deckRenderer() {
  cardGame.cards.forEach((card, i) => {
    const positionFromLeft = i * 19;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardGame.cardsWrapper.append(cardElement);
  });
}

function shuffleDeck() {
  const shuffled = cardGame.cards.sort(
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
  // document.getElementById('butt2').addEventListener('click', magicTrick);
}

function startGame() {
  createButtons();
  createCards();
  deckRenderer();
  addEventListeners();
}
document.getElementById('start-game').addEventListener('click', startGame);
