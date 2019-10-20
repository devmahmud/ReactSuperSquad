import React from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "../actions";

const HeroList = props => {
  return (
    <div>
      <h5>Your Hero Squad</h5>
      <ul className="list-group">
        {props.heroes.map(hero => {
          return (
            <li key={hero.id} className="list-group-item">
              {hero.name}
              <div
                onClick={() => props.removeCharacterById(hero.id)}
                className="d-inline float-right right-btn"
              >
                x
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    heroes: state.heroes
  };
};
export default connect(
  mapStateToProps,
  { removeCharacterById }
)(HeroList);
