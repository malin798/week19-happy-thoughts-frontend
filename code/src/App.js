import React, { useEffect, useState } from "react"
import moment from 'moment'
 

export const App = () => {
  const [allMessages, setAllMessages] = useState([]);

 useEffect(() => {
  fetch("https://technigo-thoughts.herokuapp.com/") //Hämta API:n, returnerar en promise som innehåller svaret
  .then(response => response.json()) //för att få tillgång till datan används json() så vi kan spara ner svaret
  .then(messages => setAllMessages(messages)); // till sist sparas datan ner i ett objekt
}, []);




  return (
    <>
      <ul>
      {allMessages.map(message => {
              
        let myDate = message.createdAt
        let fromNow = moment(myDate).fromNow()
        let style;

        if (message.hearts === 0) {
           style={backgroundColor: '#808080'}
          }
         else if (message.hearts !== 0) {
           style={backgroundColor: '#ffb2b2'}
           }  
              
        return (
        <li key={message._id}>
          <section>
            {message.message}
          </section>
          <section className="activity">
            <div className="likes">
              <span className="emoji" role="img" aria-label="heart emoji" 
              style={style}
              >
                ❤️
              </span> 
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
      })}
        
      </ul>
    </>
  )
}
