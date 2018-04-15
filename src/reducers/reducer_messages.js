import { ADD_TO_MESSAGES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_MESSAGES:
      return [action.payload, ...state];
    default:
      return state;
  }
}
