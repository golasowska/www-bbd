import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import MediaReducer from "./reducer_media";
import HomeFeaturesReducer from "./reducer_home_features";
import ProductsReducer from "./reducer_products";
import FeaturesReducer from "./reducer_features";
import PeopleReducer from "./reducer_people";
import NewsletterListReducer from "./reducer_newsletterList";
import MessagesReducer from "./reducer_messages";
import ContactPeopleReducer from "./reducer_peopleContact";
import MarkerReducer from "./reducer_marker";

const rootReducer = combineReducers({
  form: formReducer,
  media: MediaReducer,
  homeFeatures: HomeFeaturesReducer,
  products: ProductsReducer,
  features: FeaturesReducer,
  people: PeopleReducer,
  newsletterList: NewsletterListReducer,
  messages: MessagesReducer,
  contactPeople: ContactPeopleReducer,
  marker: MarkerReducer
});

export default rootReducer;
