import React, { useEffect, useState } from "react";
import moment from 'moment';
import { LikePost } from "./LikePost"
import { OneMessage } from "./OneMessage";

export const AllMessages = () => {

  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {

    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'GET'
    })

    .then(response => response.json()) 
    .then(messages => setAllMessages(messages));
  }, []);

  return (
  <section className="all-messages">
    {allMessages.map(message => { 
            
      return (
        <OneMessage message={message}/>

        // <li key={message._id}>
        //   <section className="message">
        //     {message.message}
        //   </section>
         
        //   <section className="activity">
        //     <div className="likes">
        //       <LikePost message={message}/> 
        //     </div>
        //     <div>
        //       {moment(message.createdAt).fromNow()}
        //     </div>
        //   </section>

        // </li>
      )
      
    })}
     </section>
  )}
