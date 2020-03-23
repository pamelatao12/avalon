import database from "../firebase/db";
import { Table, TableSettings } from "../../types";
import { initializeGame } from "../game";

/**
 * Default table settings.
 */
const MAX_PLAYER_COUNT = 9;
const SETTINGS_SMALL_BLIND = 10;
const SETTINGS_BIG_BLIND = 20;
const SETTINGS_BUY_IN = 2000;

export const createTable = async () => {
  const tableSettings: TableSettings = {
    buyIn: SETTINGS_BUY_IN,
    bigBlind: SETTINGS_BIG_BLIND,
    smallBlind: SETTINGS_SMALL_BLIND
  };

  const table: Table = {
    game: null,
    hasStarted: false,
    players: {},
    settings: tableSettings
  };

  const key = await database.push("tables", table);
  return { [key]: table };
};

export const listTables = () => {
  return database.read("tables");
};

export const getTable = (tableId: string = "-M33QUXuHYBlHzFJjZ1V") => {
  return database.read(`tables/${tableId}`);
};

/**
 * Starts the game, only if there are at least 2 players.
 */
export const startGame = async (tableId: string = "-M33QUXuHYBlHzFJjZ1V") => {
  // TODO: Transactionally start the game if it hasn't already started.
  // TODO: This is not trivial because we have to initiate the game state as
  // well.

  await database.setInTransaction(`tables/${tableId}`, (currentData: Table) => {
    if (currentData.hasStarted) {
      return;
    }

    return initializeGame(currentData);
  });
};
