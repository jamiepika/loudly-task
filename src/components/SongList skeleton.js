import React, {useState} from 'react'; 
import SongCard from './SongCards/SongCard';

const SongList = (props) => {
    
    return (  
        <div>
            <ul> 
                <li> <SongCard/> </li>
                <li> <SongCard/> </li>
                <li> <SongCard/> </li>
            </ul>
        </div>
    )
}

export default SongList;
///skeleton 