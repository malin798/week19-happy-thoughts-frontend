import React, { useEffect, useState } from "react";

export const LikePost = ({message}) => {

  const sendLike = (param) => {

    setLikes(likes +1)
  
    fetch(`https://technigo-thoughts.herokuapp.com/${param._id}/like`, {
      method: "POST",
         body: "", 
      headers: { "content-type": "application/json",}
      })
  };

  const [likes, setLikes] = useState(message.hearts) 

  return (
    <>
      <button className="emoji"  aria-label="heart emoji" 
      onClick={() => sendLike(message)}
      style={likes === 0 ? {backgroundColor: '#ccc9c9'} : {backgroundColor: '#ffb2b2'}}
      >
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>
      </button> 
      <p>
        x {likes}
      </p>
    </>
  )
}

