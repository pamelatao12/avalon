import {
  AddEventListenerController as AddEventListener,
  GetStateController as GetState
} from "./ReadDatabaseController";
import { SetDataController as SetData } from "./WriteDatabaseController";

export const debugDatabase = () => {
  // TODO: delete later. testing read and write methods to firebase db
  const tableSetup = {
    player_count: 6,
    settings: {
      small_blind: 0.2,
      big_blind: 0.4,
      buy_in_min: 10,
      buy_in_max: 20
    },
    table_name: "degens at it again"
  };
  const tablePath = "server/poker/table";
  AddEventListener("value", "server");
  SetData(tableSetup, tablePath);
  GetState("server/poker/table");
  // console should log tableSetup
};
