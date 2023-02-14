let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#card-el");

let player = {
  name : "Ankit",
  chips : 200
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function startGame() {
  let fisrtCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [fisrtCard, secondCard];
  sum = fisrtCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let num = Math.floor(Math.random() * 13 + 1);
  if (num === 1) {
    return 11;
  } else if (num > 10) {
    return 10;
  } else {
    return num;
  }
}
