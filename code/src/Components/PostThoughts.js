import React, { useState } from "react"

export const PostThoughts = () => {

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
      window.location.reload()
    })
   }

  return (
   <form onSubmit={handleSubmit} //on submit = prevent reload and run function handleSubmit 
   > 
      <li className="my-thought">
      <p>What is making you happy right now?</p>
      <textarea placeholder="Fill in your happy thought here"
      value={thought}
      onChange={event => setThought(event.target.value)}>
      </textarea>
      <button 
      type="submit"
      className="send-button" 
      style={{backgroundColor: '#ffb2b2'}}
      >
        <span role="img" aria-label="heart emoji">❤️</span> Send happy thought <span role="img" aria-label="heart emoji">❤️</span>
      </button>
      </li>
    </form>
  )
}

