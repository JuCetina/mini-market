import { combineReducers } from "redux";
import { marketReducer } from "./marketReducer";

const reducer = combineReducers({
    market: marketReducer
})

export default reducer;