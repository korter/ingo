import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import userReducer from "./userReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
  detai: detailReducer,
});

export default rootReducer;
