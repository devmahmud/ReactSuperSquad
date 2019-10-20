import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";

const heroes = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, createCharacter(action.payload)];

    case REMOVE_CHARACTER:
      return state.filter(hero => hero.id !== action.payload);
    default:
      return state;
  }
};

export const createCharacter = id => {
  let characters = characters_json.find(c => c.id === id);
  return characters;
};

export default heroes;
