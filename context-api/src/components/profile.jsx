import React, { useContext} from "react";

import userContext from "../context/userContext";
const profile = () => {

    const {user}=useContext(userContext)
    if(!user) return <h3>please login.......</h3>
  return(
    <>
    <h3>welcome {user.username}</h3>
    </>
  )
}

export default profile;

