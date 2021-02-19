import React from 'react';

const WatchLater = ({episodes, onWatchLater}) => {
    
    if(!episodes){
        return(null)
    }

    const filteredEpisode = episodes.filter((episode) => {
        return episode.favourite
    })

    const listWatchLater = filteredEpisode.map((episode) => {
        return (
            <div>
                <p onClick={() => {onWatchLater(episode)}} >{episode.title}</p>
            </div>
        )
    })

    if(!filteredEpisode){
        return "Add an episode to watch later"
    }

    return (
        <>
        <div className="watch-later">
        <h2>Episodes to watch</h2>
        {listWatchLater}
        </div>
        </>
    )
}

export default WatchLater;