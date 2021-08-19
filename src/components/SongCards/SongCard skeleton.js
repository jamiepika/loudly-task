import React, {useState} from 'react'; 
import LikeButton from './LikeButton';
import PlayButton from './PlayButton';

const SongCard = (props) => {
    //songId, setSongId = useState('')

    return (
        <div> 
            <p> Song Title </p>
            <p> Song Image </p> 
            <LikeButton/>
            <PlayButton/>
        </div>
    )
}

export default SongCard;

///skeleton 