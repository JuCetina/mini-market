import { createStore } from "redux";
import reducer from "../reducers";
import { saveState } from "../helpers/localStorage";

const store = createStore(reducer);

store.subscribe(() => saveState(store.getState().market));

export default store;