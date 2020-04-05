import React from 'react';
import CharacterCard from './CharacterCard'

export default function CharacterList(props) {

  //map CharacterCard by char_id
  return (
    <>
      <div className="columns is-multiline">
        {props.characters.map(char => {
          return <CharacterCard
            char={char}
            key={char.char_id}
          />
        })}
      </div>
    </>
  )
}