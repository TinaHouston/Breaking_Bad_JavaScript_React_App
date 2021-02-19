import React from 'react';

const EpisodeDetails = ({episode, onWatchLater}) => {
    if(!episode) {
        return(null)
    }

    const characters = episode.characters.map((character) => {
        return <li>{character}</li>
    })

    return (
        <div className="episode-details">
            <br></br>
            <h2>Episode Details</h2>
            <h3><i>"{episode.title}"</i></h3>
            <p><b>Air date: </b>{episode.air_date}</p>
            <p><b>Season: </b>{episode.season}</p>
            <p><b>Characters:</b></p>
            <ul>
                {characters}
            </ul>
            <br></br>
            <button onClick={() => {onWatchLater(episode)}}>
                {episode.favourite ? 'Delete from Watchlist' : 'Add to Watchlist'}
            </button>
        </div>
    )
}

export default EpisodeDetails;