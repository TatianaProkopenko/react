import React from "react";

interface IUserProps{
  userTitle: string
}

const User =(props:IUserProps) =>{
  return(
    <div>
      {props.userTitle}
    </div>
  )
}

export default User