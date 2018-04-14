import { combineReducers } from "redux";
import MediaReducer from "./reducer_media";
import HomeFeaturesReducer from "./reducer_home_features";
import ProductsReducer from "./reducer_products";
import FeaturesReducer from "./reducer_features";
import PeopleReducer from "./reducer_people";

const rootReducer = combineReducers({
  media: MediaReducer,
  homeFeatures: HomeFeaturesReducer,
  products: ProductsReducer,
  features: FeaturesReducer,
  people: PeopleReducer
});

export default rootReducer;
