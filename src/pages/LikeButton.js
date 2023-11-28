import React from 'react';

const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);

  const toggleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <button className= "btn"onClick={toggleLike}>
      {liked ? <h4> Unlike 👎 </h4> : <h4> Like 👍 </h4>}
    </button>
  );
};

export default LikeButton;