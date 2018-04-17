import { SHOW_MARKER } from "../actions";

export default function(
  state = {
    name: "BBOD",
    country: "South Korea",
    lng: "127.76692200000002",
    lat: "35.907757"
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
