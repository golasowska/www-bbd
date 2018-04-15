import { ADD_TO_NEWSLETTER } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_NEWSLETTER:
      return [action.payload, ...state];
    default:
      return state;
  }
}
