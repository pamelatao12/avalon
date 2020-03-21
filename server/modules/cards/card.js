export class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  toString() {
    return `${this.value.toShortString()}${this.suit.toShortString()}`;
  }

  equals(other) {
    return this.value === other.value && this.suit === other.suit;
  }

  compareTo(other) {
    return 0;
  }
}
