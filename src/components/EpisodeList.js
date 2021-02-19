import React from 'react';

const EpisodeList = ({episodes, onEpisodeSelect}) => {

    const episodeListItems = episodes.map((episode) => {
        return (
            <li onClick={() => {onEpisodeSelect(episode)}}key={episode.episode_id}>{episode.title}</li>
        )
    })

    return (
        <div className="episode-list">
            <h2>Episodes</h2>
            <ul>
                {episodeListItems}
            </ul>
        </div>
    )
}

export default EpisodeList;