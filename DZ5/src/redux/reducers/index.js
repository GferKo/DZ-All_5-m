import { combineReducers } from "redux";
import { charactersReducer } from "./CharacterReducer";
import { catReducer } from "./catReducer";

export const rootReducer = combineReducers({
    charactersReducer,
    catReducer
})