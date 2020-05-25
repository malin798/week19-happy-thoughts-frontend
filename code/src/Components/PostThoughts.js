import React, { useState } from "react"

export const PostThoughts = ({setThought}) => {

  const [inputValue, setInputValue] = useState("")
  const [name, setName] = useState();
  
  const handleSubmit = async (event) => {
    event.preventDefault()  
    await fetch("https://malins-happy-thoughts-api.herokuapp.com/", {
      method: 'POST',
      headers: {
         "content-type": "application/json" 
      },
      body: JSON.stringify({
        "message": inputValue,
        "name": name
      })
    })
    setThought(inputValue) 
    setName("")
    setInputValue("")
   }

  return (
    <section className="my-thought">

      <form onSubmit={event => {handleSubmit(event)}}> 

        <h2>What is making you happy right now?</h2>

        <textarea 
          placeholder="Your happy thought.."
          maxLength="140"
          minLength="5"
          value={inputValue}
          onChange={event => {setInputValue(event.target.value)}}
        >
        </textarea>

        <div className="show-input-length">

          <p>
            {inputValue.length} / 140 characters. 
            {inputValue.length < 5 && " Min 5 characters"}
          </p>
        </div>

        <input
          type="text"
          min="2"
          placeholder="Your name (optional)"
          value={name}
          onChange={event => setName(event.target.value)}
        >
        </input>
          
        <button 
          type="submit"
          className="send-button" 
          style={{backgroundColor: '#ffb2b2'}}
          {...inputValue.length < 5 ?  {disabled: true} : {enabled: true} }
        >
          <span role="img" aria-label="heart letter">💌</span> Send happy thought <span role="img" aria-label="heart letter">💌</span>
        </button>

      </form>

    </section>
  )
}

