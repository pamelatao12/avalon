import { SUITS } from "./modules/cards/suit";
import { VALUES } from "./modules/cards/value";
import { Card } from "./modules/cards/card";

class Deck {
  constructor() {
    this.cards = this.initializeCards();
  }

  initializeCards() {
    const cards = [];

    SUITS.forEach(suit => {
      VALUES.forEach(value => {
        cards.push(new Card(suit, value));
      });
    });
  }
}
