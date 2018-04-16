import { SHOW_MARKER } from "../actions";

export default function(
  state = {
    name: "BBOD",
    country: "United Kingdom",
    lng: "-3.43597299999999",
    lat: "55.378051"
  },
  action
) {
  switch (action.type) {
    case SHOW_MARKER:
      return action.payload;
    default:
      return state;
  }
}
