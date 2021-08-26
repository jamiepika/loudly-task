import React, {useState, useEffect} from 'react'; 

const PlayButton = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(props.file));

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        isPlaying ? audio.play() : audio.pause();
    }, [isPlaying]);

    return (
        <button onClick={() => togglePlay()} > 
          { isPlaying ? "Pause" : "Play" } 
        </button>
    )
}

export default PlayButton;
