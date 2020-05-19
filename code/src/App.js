import React, { useState } from "react"
import { PostThoughts } from "Components/PostThoughts"; 
import { AllMessages } from "Components/AllMessages";

export const App = () => {

  //loading state
  const [loading, setLoading] = useState(false);
  //Post thought state
  const [thought, setThought] = useState("");
  //allMessages state
  const [myFilter, setMyFilter] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  
  return (

      <main>

       <PostThoughts 
        setThought={setThought}
      />
       <AllMessages 
        myFilter={myFilter} 
        setMyFilter={setMyFilter} 
        allMessages={allMessages} 
        setAllMessages={setAllMessages}
        loading={loading}
        setLoading={setLoading}
        thought={thought} 
      /> 

      </main>

  ) 
}
