import React from "react";
import { LikePost } from "./LikePost";
import moment from 'moment';

export const MessageItem = ({message})=> {

  return (

    <section className="message-item">
          <section className="message">
            <p>
              {message.message}
            </p>
            <p className="creator-name">
              /{message.name}
            </p>
          </section>
         
          <section className="activity">
            <div className="likes">
              <LikePost message={message}/>  
            </div>
            <div>
              {moment(message.createdAt).fromNow()}
            </div>
          </section>
          </section>

  )
}

