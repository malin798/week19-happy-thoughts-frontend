import React, { useState } from "react"

export const PostThoughts = () => {

  const [loading, setLoading] = useState(true)
  const [thought, setThought] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault()
  
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST',
      headers: {
         "content-type": "application/json" 
      },
      body: JSON.stringify({
        "message": thought
      })
    })
    .then(() => {
      setLoading(false)
      console.log(loading)
      window.location.reload()
    })
   }

  return (
    <li className="my-thought">

      <form onSubmit={handleSubmit}> 

        <h2>What is making you happy right now?</h2>

        <textarea 
        placeholder="Fill in your happy thought here"
        maxLength="140"
        minLength="5"
        value={thought}
        onChange={event => setThought(event.target.value)}>
        </textarea>

        <p className="show-input-length">
          {thought.length} / 140 characters
        </p>
          {/* {thought.length < 5 ? <p>5 chars or more</p> : <p>Entered 5 chars</p> } */}
      
        <button 
        type="submit"
        className="send-button" 
        style={{backgroundColor: '#ffb2b2'}}
        {...thought.length < 5 ?  {disabled: true} : {enabled: true} }
        >
          <span role="img" aria-label="heart emoji">❤️</span> Send happy thought <span role="img" aria-label="heart emoji">❤️</span>
        </button>

      </form>

    </li>
  )
}

