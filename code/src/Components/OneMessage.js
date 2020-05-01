import React from "react";
import { LikePost } from "./LikePost";
import moment from 'moment';

export const OneMessage = (param)=> {
  return (

    <li key={param.message._id}>
          <section className="message">
            {param.message.message}
          </section>
         
          <section className="activity">
            <div className="likes">
              <LikePost message={param.message}/> 
            </div>
            <div>
              {moment(param.message.createdAt).fromNow()}
            </div>
          </section>
          </li>

  )
}

