import React from 'react';

const CharacterDetails = ({character}) => {
    if(!character) {
        return(null)
    }

    const occupations = character.occupation.map((occupation) => {
        return occupation
    }).join(", ")

    return (
        <div className="character-details">
            <h2>Character Details</h2>
            <h3><i>{character.name}</i></h3>
            <p><b>Played by: </b>{character.portrayed}</p>
            <p><b>Nickname: </b>{character.birthday}</p>
            <p><b>Birthday: </b>{character.birthday}</p>
            <p><b>Status: </b>{character.status}</p>
            <p><b>Occupation: </b>{occupations}</p>
            <img src={character.img} height="200" />
        </div>
    )
}

export default CharacterDetails;