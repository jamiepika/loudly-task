import React, {useState} from 'react'; 
import axios from 'axios'; 

const LikeButton = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    
    function likeClicked () {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
      console.log(likeCount);
    };

    function postLike (props) { 
      const queryParam = "apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8";
      const bodyParam = props; //track ID
      const url = `https://api-stg.jam-community.com/interact/like/${queryParam}`;  

      axios
        .post(url, 
          { "Likes" : `${likeCount}`}, 
          {
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'body' : bodyParam
          }
        }
    ).then((response) => {
        console.log(response);
    }).catch(err => {
            console.log(err)
        }, []);
  }
  return (
        <button 
        onClick={() => likeClicked()}
        onClick={() => postLike(props.id)}>
           Like 
           </button>
    )
}

export default LikeButton;