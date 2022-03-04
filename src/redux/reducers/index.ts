import { combineReducers } from "redux";
import starshipsReducer from "./starshipsReducer";

const rootReducer = combineReducers({
  starships: starshipsReducer,
});

export default rootReducer;
