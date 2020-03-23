import React, { useEffect, useState } from "react";
import moment from 'moment';
import { LikePost } from "./LikePost"

export const AllMessages = () => {

  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'GET'
    }) //Hämta API:n, returnerar en promise som innehåller svaret

    .then(response => response.json()) //ytterligare en response, för att få tillgång till datan används json() så vi kan spara ner svaret i en json. I detta steget är datan inte json ännu
    .then(messages => setAllMessages(messages)); // till sist sparas datan ner i ett objekt
  }, []);

 return (

  allMessages.map(message => { 
    console.log(message)
    let myDate = message.createdAt
    let fromNow = moment(myDate).fromNow()
    let messageId = message._id
          
    return (
    <li key={message._id}>
      <section>
        {message.message}
      </section>
      <section className="activity">
        <div className="likes">
          <button className="emoji"  aria-label="heart emoji" 
          onClick={() => LikePost(messageId)} // on click - skicka en post request via LikePost
          style={message.hearts === 0 ? {backgroundColor: '#ccc9c9'} : {backgroundColor: '#ffb2b2'}}
          >
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>
          </button> 
          <p>
            x {message.hearts}
          </p>
        </div>
        <div>
          {fromNow}
        </div>
        
      </section>
    </li>
    )
  })
)
}
