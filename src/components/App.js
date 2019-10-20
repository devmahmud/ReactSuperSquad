import React from "react";
import CharacterList from "./CharacterList";
import HeroList from "./HeroList";
import SquadStats from "./SqadStats";
import "../styles/index.css";

function App() {
  return (
    <div className="container text-center">
      <h2 className="mt-4">SuperSquad</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    </div>
  );
}

export default App;
