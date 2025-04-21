import React, { useContext} from "react";

import userContext from "../context/userContext";
const profile = () => {

    const {user}=useContext(userContext)
    if(!user) return <div>please login1</div>
  return(
    <>
    <h1>welcome {user.username}</h1>
    </>
  )
}

export default profile;

