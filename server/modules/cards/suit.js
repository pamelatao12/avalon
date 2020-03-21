class Suit {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return name;
  }

  toShortString() {
    return name.index(0);
  }
}

export const DIAMOND = new Suit("Diamond");
export const CLUB = new Suit("Club");
export const HEART = new Suit("Heart");
export const SPADE = new Suit("Spade");
