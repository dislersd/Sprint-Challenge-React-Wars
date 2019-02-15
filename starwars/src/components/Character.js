import React from 'react'

const Character = props => {
    return(
      <div>
        <p> {props.starWarsChars.name}</p>
        <p> {props.starWarsChars.eyeColor} </p>
      </div>
    )
}

export default Character;