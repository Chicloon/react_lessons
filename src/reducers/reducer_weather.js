import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  console.log("state", state);
  switch (action.type) {
    case FETCH_WEATHER:
      const citydata = action.payload.data;
      if (citydata) {
        return [citydata, ...state];
      } else {
        return [...state];
      }
  }

  return state;
}
