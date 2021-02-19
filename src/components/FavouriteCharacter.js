import React from 'react';

const FavouriteCharacter = ({characters, onCharacterSelect}) => {
    
    if(!characters){
        return(null)
    }

    const filteredCharacter = characters.filter((character) => {
        return character.favourite
    })

    const listFavCharacters = filteredCharacter.map((character) => {
        return (
            <div>
                <p onClick={() => {onCharacterSelect(character)}} >{character.name}</p>
            </div>
        )
    })

    if(!filteredCharacter){
        return "Add a favourite from character list"
    }

    return (
        <>
        <div className="favourite-characters">
        <h2>Favourite Characters</h2>
        {listFavCharacters}
        </div>
        </>
    )
}

export default FavouriteCharacter;