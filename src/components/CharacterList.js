import React from 'react';

const CharacterList = ({characters, onCharacterSelect}) => {

    const characterListItems = characters.map((character) => {
        return (
            <li onClick={() => {onCharacterSelect(character)}} key={character.char_id}>{character.name}</li>
        )
    })

    return (
        <div className="character-list">
            <h2>Characters</h2>
           <ul>
               {characterListItems}
           </ul>
        </div>
    )
}

export default CharacterList;