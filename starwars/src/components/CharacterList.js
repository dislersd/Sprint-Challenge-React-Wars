import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      {props.data.map(character => 
        <Character 
        key={character.id}
        data={character} 
        />
      )}
    </div>
  );
};

export default CharacterList;
