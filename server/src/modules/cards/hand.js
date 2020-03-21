/**
 * Returns a deterministic value for an array of cards. This value can then
 * be used to determine whether one set of cards has a higher value over
 * another.
 *
 * - straight flush:
 * - quads:
 * - full house:
 * - flush:
 * - straight:
 * - trips:
 * - two pair:
 * - pair:
 * - high card:
 */
import { SUITS } from "./suit";
import { ACE } from "./value";

export const determineHandValue = cards => {
  // Mapping of values/suits to number of occurrences.
  const [valueCounts, suitCounts] = countValuesAndSuits(cards);

  const flushValue = determineFlushValue(cards, suitCounts);

  const straightValue = determineStraightValue(cards, valueCounts);

  const tripsValue = determineTripsValue(cards, valueCounts);

  const twoPairValue = determineTwoPairValue(cards, valueCounts);

  const pairValue = determinePairValue(cards, valueCounts);

  const highCardValue = determineHighCardValue(cards, valueCounts);
};

const countValuesAndSuits = cards => {
  const valueCounts = {};
  const suitCounts = {};

  cards.forEach(card => {
    const value = card.value.value;
    valueCounts[value] = getCount(valueCounts, value) + 1;

    const suit = card.suit;
    suitCounts[suit] = getCount(suitCounts, suit) + 1;
  });

  // Add ACE on the low end to facilitate straight computation.
  valueCounts[1] = valueCounts[ACE.value];
  return [valueCounts, suitCounts];
};

const determineFlushValue = (cards, suitCounts) => {
  for (const suit of SUITS) {
    if (getCount(suitCounts, suit) >= 5) {
      // TODO: Compute some value that takes into account all 5 cards.
    }
  }

  return 0;
};

const determineStraightValue = (cards, valueCounts) => {
  // TODO: Compute some value based on highest card in straight.
};

const determineTripsValue = (cards, valueCounts) => {
  // TODO: Compute some value based on trips value and top 2 cards after.
};

const determineTwoPairValue = (cards, valueCounts) => {
  // TODO: Compute some value based on the 2 pairs and top card after.
};

const determinePairValue = (cards, valueCounts) => {
  // TODO: Compute some value based on trips value and top 3 cards after.
};

const determineHighCardValue = (cards, valueCounts) => {
  // TODO: Compute some value based on top 5 cards.
};

const getCount = (obj, value) => {
  return obj[value] || 0;
};
