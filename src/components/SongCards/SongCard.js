import React, {useState} from 'react'; 
import LikeButton from './LikeButton';
import PlayButton from './PlayButton';

const SongCard = (props) => {

    return (
    <div className="SongCard-outer"> 
        <div className="table">
        <ul className="SongCard-list"> 
            <li className="img-container">
                <img src= {props.cover_image_path} alt="Cover"/> 
                </li>
            <li className="SongCard-li"> <PlayButton file={props.music_file_path}/> </li>
            <li className="SongCard-li"> <LikeButton id={props.id} /> </li>
            <li className="SongCard-li"> <h2> {props.name} </h2> </li>
        </ul>
        </div>
    </div>
    )
}

export default SongCard;