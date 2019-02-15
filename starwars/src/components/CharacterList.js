import React from "react";
import Character from "./Character";
import "./StarWars.css"

const CharacterList = props => {
  return (
    <div>
      {props.data.map((character, index) => 
        <Character 
        key={index}
        data={character} 
        setEyeColor={props.setEyeColor}
        />
      )}
    </div>
  );
};

export default CharacterList;
