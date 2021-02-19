import React, {useState, useEffect} from 'react';
import CharacterList from "../components/CharacterList";
import CharacterDetails from "../components/CharacterDetails";
import EpisodeList from "../components/EpisodeList";
import EpisodeDetails from "../components/EpisodeDetails";

const CharacterContainer = () => {


    const [characters, setCharacters] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(0)
    const [selectedEpisode, setSelectedEpisode] = useState(0)

    const getCharactersEpisodes = () => {
        console.log("Fetching data...");
        fetch("https://breakingbadapi.com/api/characters")
        .then(res => res.json())
        .then(characters => setCharacters(characters))
        fetch("https://breakingbadapi.com/api/episodes")
        .then(res => res.json())
        .then(episodes => setEpisodes(episodes))
    }

    useEffect(() => {
        getCharactersEpisodes()
    }, [])

    const handleSelectedCharacter = (character) => {
        setSelectedCharacter(character)
    };

    const handleSelectedEpisode = (episode) => {
        setSelectedEpisode(episode)
    };

    return (
        <div className="character-container">
            <CharacterList characters={characters} onCharacterSelect={handleSelectedCharacter}/>
            <EpisodeList episodes={episodes} onEpisodeSelect={handleSelectedEpisode}/>
            <CharacterDetails character={selectedCharacter}/>
            <EpisodeDetails episode={selectedEpisode} />
        </div>
    )
}

export default CharacterContainer;