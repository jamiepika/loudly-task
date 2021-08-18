import React, {useState} from 'react'; 
import SongCard from './SongCards/SongCard';

const SongList = (props) => {
    const [songs, setSongs] = useState('');

    /* fetch("https://api-stg.jam-community.com/song/trending",
    {
        "method" : "GET",
    }).then(response => response.json())
    .then(response=> {
        console.log(response)
    }).catch(err => {
        console.log(err)
    }); */
    
    return (  
        <div>
            <h1> List of Songs </h1>
            <ul> 
                <li> <SongCard/> </li>
                <li> <SongCard/> </li>
                <li> <SongCard/> </li>
            </ul>
        </div>
    )
}

export default SongList;