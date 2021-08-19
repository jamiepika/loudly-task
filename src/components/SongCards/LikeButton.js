import React, {useState} from 'react'; 
import axios from 'axios'; 

const API_KEY = process.env.REACT_APP_LOUDLY_API_KEY;

const LikeButton = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const id = props.id; 
    
    function likeClicked () {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
   
      const queryParam = `apikey=${API_KEY}`;
      const bodyParam = {
        'ID': id }
      const url = `https://api-stg.jam-community.com/interact/like?${queryParam}`;  
      const headers = {
            'Content-Type' : 'application/x-www-form-urlencoded',
          };

    axios
        .post(url, bodyParam, {headers}
    ).then((response) => {
        console.log(response);
        setLikeCount(response);
    }).catch(err => {
            console.log(err)
        });
  };

  return (
        <button 
        onClick={() => likeClicked()}>
           Likes: {likeCount}
           </button>
    )
}

export default LikeButton;