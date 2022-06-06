import React from "react";
/* import  buttonIcon from './icon.png'; */
import './Button.css'
import User from '../User/User'

interface IButtonProps{
  title: string
  disabled: boolean
  /* onClickHandler: () => void */
}


const Button:React.FC<IButtonProps> = ({title, disabled}) =>{

  return (
  <button className='button' disabled={disabled} >
   <div>{title}</div>
  </button>
  )
}
 

export default Button;