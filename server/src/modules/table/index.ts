import { setDatabase } from "../firebase/db/WriteDatabaseController";

const MAX_PLAYER_COUNT = 9;

const SETTINGS_SMALL_BLIND = 10;
const SETTINGS_BIG_BLIND = 20;
const SETTINGS_BUY_IN = 2000;

type TableSettings = {
  bigBlind: number;
  buyIn: number;
  smallBlind: number;
};

type Table = {
  currentBetSize: number;
  hasStarted: boolean;
  settings: TableSettings;
};

export const createTable = async () => {
  const tableSettings: TableSettings = {
    buyIn: SETTINGS_BUY_IN,
    bigBlind: SETTINGS_BIG_BLIND,
    smallBlind: SETTINGS_SMALL_BLIND
  };

  const table: Table = {
    currentBetSize: 0,
    hasStarted: false,
    settings: tableSettings
  };

  const payload = { "1": table };
  await setDatabase("tables", payload);
  return payload;
};
