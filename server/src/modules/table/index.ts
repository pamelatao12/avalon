import { setDatabase } from "../firebase/db/WriteDatabaseController";

const MAX_PLAYER_COUNT = 9;

const SETTINGS_SMALL_BLIND = 10;
const SETTINGS_BIG_BLIND = 20;
const SETTINGS_BUY_IN = 2000;

type PlayerKeys = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type TableSettings = {
  bigBlind: number;
  buyIn: number;
  smallBlind: number;
};

type Player = {
  id: string;
};

type Players = {
  [key in PlayerKeys]: Player | null;
};

type BetSizes = {
  currentBetSize: number;
  minBet: number;
  halfPot: number;
  pot: number;
};

enum Turn {
  PREFLOP = "preflop",
  FLOP = "flop",
  TURN = "turn",
  RIVER = "river"
}

type Board = {
  flopCard1: string | null;
  flopCard2: string | null;
  flopCard3: string | null;
  turnCard: string | null;
  riverCard: string | null;
  turn: Turn;
};

type Game = {
  betSizes: BetSizes;
  potSize: number;
  // Player number whose turn it is.
  whoseTurn: number;
  board: Board;
};

type Table = {
  game: Game | null;
  hasStarted: boolean;
  settings: TableSettings;
  players: Players;
};

export const createTable = async () => {
  const tableSettings: TableSettings = {
    buyIn: SETTINGS_BUY_IN,
    bigBlind: SETTINGS_BIG_BLIND,
    smallBlind: SETTINGS_SMALL_BLIND
  };

  const table: Table = {
    game: null,
    hasStarted: false,
    players: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null
    },
    settings: tableSettings
  };

  const payload = { "1": table };
  await setDatabase("tables", payload);
  return payload;
};
