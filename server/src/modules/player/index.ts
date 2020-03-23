import database from "../firebase/db";

enum SeatState {
  SEATED = "seated",
  STANDING = "standing"
}

export type Player = {
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

/**
 * TODO: Remove default values once we are ready to accept user requests. These
 * were added to make testing easier.
 */

export const sitAtTable = async (
  tableId: string = "-M33QUXuHYBlHzFJjZ1V",
  seatNumber: number = 1
) => {
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

  const committed = await database.setInTransaction(
    `tables/${tableId}/players/${seatNumber}`,
    (currentData: any) => {
      if (currentData) {
        return;
      }

      return player;
    }
  );

  return committed ? player : undefined;
};

export const standUp = async () => {
  /**
   * TODO: Mark player as standing.
   */
};

export const leaveTable = async (
  tableId: string = "-M33QUXuHYBlHzFJjZ1V",
  seatNumber: number = 1
) => {
  /**
   * TODO: Remove player from table.
   */
};
