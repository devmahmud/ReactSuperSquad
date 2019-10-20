import React from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../actions";

const CharacterList = props => {
  return (
    <div>
      <h5>Characters</h5>
      <ul className="list-group">
        {props.characters.map(character => {
          return (
            <li key={character.id} className="list-group-item">
              {character.name}
              {props.characters.length > 5 ? (
                <div
                  onClick={() => props.addCharacterById(character.id)}
                  className="d-inline float-right right-btn"
                >
                  +
                </div>
              ) : (
                <div />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { characters: state.characters };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({addCharacterById},dispatch)
// };

export default connect(
  mapStateToProps,
  { addCharacterById }
)(CharacterList);
