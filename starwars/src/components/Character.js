import React from "react";

const Character = props => {
  return (
    <ul>
      <li className="character-name"> {props.data.name} </li>
      <li>Eye Color: 
        <span onClick={props.setEyeColor}>
          {props.data.eye_color}
        </span>
      </li>
    </ul>
  );
};

export default Character;
