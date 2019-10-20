import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import { createCharacter } from "./heroesReducers.js";

const characters = (state = characters_json, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.payload);
      return characters;
    case REMOVE_CHARACTER:
      return [...state, createCharacter(action.payload)];
    default:
      return state;
  }
};

export default characters;
