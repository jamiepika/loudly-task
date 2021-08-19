import React, {useState, useEffect} from 'react'; 
import SongCard from './SongCards/SongCard';
import axios from 'axios'; 
import PropTypes from 'prop-types';

const SongList = (props) => {
const [songs, setSongs] =useState([])

    useEffect(()=> {
        axios.get("https://api-stg.jam-community.com/song/trending")
        .then(res => {
            console.log(res)
            setSongs(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
    
    return (  
        <div className="SongList">
            <ul> 
                {songs.map(song => (
                <li key={song.id}> 
                <SongCard 
                id={song.id}
                name={song.name}
                music_file_path = {song.music_file_path}
                cover_image_path = {song.cover_image_path} /> 
                </li>
                ))}
            </ul>
        </div>
    )
}

SongList.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    music_file_path: PropTypes.string,
    cover_image_path: PropTypes.string
}

export default SongList;