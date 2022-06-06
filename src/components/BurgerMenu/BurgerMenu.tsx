import React from "react";
import "./BurgerMenu.css";
 

interface IBurgerMenu{
 burgerMenuOnClickHandler: () => void
}

const BurgerMenu: React.FC<IBurgerMenu> = ({burgerMenuOnClickHandler}) =>{
  return (
    <div className='burger-menu' onClick={burgerMenuOnClickHandler}>
      <p></p>
    </div>
  )
}




export default BurgerMenu;