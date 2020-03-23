import React, { useEffect, useState } from "react";

export const LikePost = ({message}) => {

  const [likes, setLikes] = useState(message.hearts)

  useEffect(() => {

     fetch(`https://technigo-thoughts.herokuapp.com/${message._id}/like`, {
       method: "POST",
          body: "", 
       headers: { "content-type": "application/json",}
       })
  
  }, []);
  
  return (
    <>
      <button className="emoji"  aria-label="heart emoji" 
      onClick={() => setLikes(likes +1)} 
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