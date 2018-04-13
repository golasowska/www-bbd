import { combineReducers } from "redux";
import MediaReducer from "./reducer_media";
import HomeFeatures from "./reducer_home_features";

const rootReducer = combineReducers({
  media: MediaReducer,
  homeFeatures: HomeFeatures
});

export default rootReducer;
