import React from 'react'
import Character from './Character'

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Character />
      </div>
    )
  }
}

export default CharacterList;