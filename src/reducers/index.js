import { combineReducers } from "redux";
import MediaReducer from "./reducer_media";
import HomeFeaturesReducer from "./reducer_home_features";
import ProductsReducer from "./reducer_products";

const rootReducer = combineReducers({
  media: MediaReducer,
  homeFeatures: HomeFeaturesReducer,
  products: ProductsReducer
});

export default rootReducer;
