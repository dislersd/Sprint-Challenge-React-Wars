import React from 'react'

const Character = props => {
    return(
      <div>
        <p> {props.data.name} </p>
        <p> {props.data.eyeColor} </p>
      </div>
    )
}

export default Character;