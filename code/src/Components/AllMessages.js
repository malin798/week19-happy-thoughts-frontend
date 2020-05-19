import React, { useEffect } from "react";
import { MessageItem } from "./MessageItem";
import { FilterOptions } from './FilterOptions';
import { Loading } from './Loading'

export const AllMessages = ({myFilter, setMyFilter, allMessages, setAllMessages, loading, setLoading, thought}) => {
    
  //"https://malins-happy-thoughts-api.herokuapp.com/thoughts"
  useEffect(() => {
    setLoading(true)
    fetch(`https://malins-happy-thoughts-api.herokuapp.com/thoughts${myFilter}`, {
      method: 'GET'
    })
    .then(response => response.json()) 
    .then(messages => {
      setAllMessages(messages)
      setLoading(false)
    });
  }, [myFilter, thought]);

  if (loading) {
    return (
      < Loading />
    )
  } else {
    return (
      <>
        < FilterOptions setMyFilter={setMyFilter}/>
        <section className="all-messages">

          {allMessages.map(message => { 
                  
            return (
              < MessageItem message={message} key={message.createdAt}/>
            )
          })}
          
        </section>
      </>
    )}
}
