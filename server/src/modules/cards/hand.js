/**
 * Returns a deterministic value for an array of cards. This value can then
 * be used to determine whether one set of cards has a higher value over
 * another. The value is a string as described below, without the spaces.
 *
 * - straight flush:   08 00 00 00 00 xx
 * - quads:            07 00 00 00 Q1 xx
 * - full house:       06 00 00 00 T1 P1
 * - flush:            05 xx xx xx xx xx
 * - straight:         04 00 00 00 00 xx
 * - trips:            03 00 00 T1 xx xx
 * - two pair:         02 00 00 P1 P2 xx
 * - one pair:         01 00 P1 xx xx xx
 * - high card:        00 xx xx xx xx xx
 */
import { SUITS } from "./suit";
import { ACE, VALUES, VALUES_DESC } from "./value";

export const determineHandValue = cards => {
  // Mapping of values/suits to list of cards corresponding to them.
  const [values, suits] = countValuesAndSuits(cards);

  const flushValue = determineFlushValue(suits);

  const straightValue = determineStraightValue(values);

  const tripsValue = determineTripsValue(values);

  const twoPairValue = determineTwoPairValue(values);

  const onePairValue = determineOnePairValue(values);

  const highCardValue = determineHighCardValue(values);
};

const countValuesAndSuits = cards => {
  const values = {};
  const suits = {};

  // Initialize list with empty arrays to simplify adding values.
  SUITS.forEach(suit => (suits[suit] = []));
  VALUES.forEach(value => (values[value.value] = []));

  cards.forEach(card => {
    const value = card.value.value;
    values[value].push(card);

    const suit = card.suit;
    suits[suit].push(card);
  });

  // Add ACE on the low end to facilitate straight computation.
  values[1] = values[ACE.value];
  return [values, suits];
};

/**
 * Returns a value of the form "05 xx xx xx xx xx" without spaces, or the empty
 * string if there is no flush.
 */
const determineFlushValue = suits => {
  for (const suit of SUITS) {
    const cards = suits[suit];
    if (cards.length >= 5) {
      // Sort in desc order.
      cards.sort((a, b) => -1 * a.compareTo(b));

      let result = "05";
      for (let i = 0; i < 5; i++) {
        result += cards[i].value.getValueAsString();
      }
      return result;
    }
  }

  return "";
};

/**
 * Returns a value of the form "04 00 00 00 00 xx" without spaces, or the empty
 * string if there is no straight.
 */
const determineStraightValue = values => {
  // TODO: Compute some value based on highest card in straight.
  return "";
};

/**
 * Returns a value of the form "03 00 00 T1 xx xx" without spaces, or the empty
 * string if there is no trips.
 */
const determineTripsValue = values => {
  let tripsValue;
  for (const value of VALUES_DESC) {
    if (values[value.value].length === 3) {
      tripsValue = value;
      break;
    }
  }

  if (!tripsValue) {
    return "";
  }

  let result = "030000";
  result += tripsValue.getValueAsString();
  let count = 0;
  for (const value of VALUES_DESC) {
    if (value !== tripsValue && values[value.value].length === 1) {
      result += value.getValueAsString();

      if (++count === 2) {
        return result;
      }
    }
  }
};

/**
 * Returns a value of the form "02 00 00 P1 P2 xx" without spaces, or the empty
 * string if there is no two pair.
 */
const determineTwoPairValue = values => {
  let count = 0;
  let pairOneValue;
  let pairTwoValue;

  for (const value of VALUES_DESC) {
    if (values[value.value].length === 2) {
      if (count === 0) {
        pairOneValue = value;
        count++;
      } else if (count === 1) {
        pairTwoValue = value;
        break;
      }
    }
  }

  if (!pairOneValue || !pairTwoValue) {
    return "";
  }

  let result = "020000";
  result += pairOneValue.getValueAsString();
  result += pairTwoValue.getValueAsString();

  for (const value of VALUES_DESC) {
    if (
      value !== pairOneValue &&
      value !== pairTwoValue &&
      values[value.value].length === 1
    ) {
      result += value.getValueAsString();
      return result;
    }
  }
};

const determineOnePairValue = values => {
  // TODO: Compute some value based on trips value and top 3 cards after.
  return "";
};

/**
 * Returns a value of the form "00 xx xx xx xx xx" without spaces.
 */
const determineHighCardValue = values => {
  let count = 0;
  let result = "00";

  for (const value of VALUES_DESC) {
    if (values[value.value].length === 1) {
      count++;
      result += value.getValueAsString();

      if (count === 5) {
        return result;
      }
    }
  }
};
