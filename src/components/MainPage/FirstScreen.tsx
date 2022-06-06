import React from "react";

import './FirstScreen.css';


import Button from "../Button/Button";

interface IFirstScreen{
  buttonTitle: string;
  buttonDisabled: boolean;
}

const FirstScreen: React.FC<IFirstScreen> =({ buttonTitle,buttonDisabled }) => {
  return(
    <section className='firstscreen'>
      <div className="container">
        <div className="firstscreen-content">
          <h1>
            Make you Blog <span>Online</span>
          </h1>
          <div className="firstscreen-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem.</div>
          <Button title={buttonTitle} disabled={buttonDisabled}/>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen;