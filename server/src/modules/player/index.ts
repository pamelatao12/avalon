import database from "../firebase/db";

enum SeatState {
  SEATED = "seated",
  STANDING = "standing"
}

type Player = {
  currentBetSize: number | null;
  holeCards: string | null;
  isDealer: boolean;
  isFolded: boolean;
  isSmallBlind: boolean;
  isBigBlind: boolean;
  seatState: SeatState;
  stackSize: number;
  userId: string;
};

export const sitAtTable = async (
  tableId: string = "-M33QUXuHYBlHzFJjZ1V",
  seatNumber: number = 1
) => {
  /**
   * TODO: Perform this in a single transaction. Verify that no other player is
   * in this seat right now.
   */

  const player: Player = {
    currentBetSize: null,
    holeCards: null,
    isBigBlind: false,
    isDealer: false,
    isFolded: false,
    isSmallBlind: false,
    seatState: SeatState.SEATED,
    stackSize: 2000,
    userId: "davidvcho@gmail.com"
  };

  await database.set(`tables/${tableId}/players/${seatNumber}`, player);
  return player;
};
