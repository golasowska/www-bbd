import { SHOW_MARKER } from "../actions";

export default function(
  state = {
    name: "Piotr",
    phone: "123 45 67",
    email: "piotr@gmail.com",
    lng: "0.121817",
    lat: "52.205337"
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
