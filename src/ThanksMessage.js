 import { useState } from 'react';
import thanks from './images/illustration-thank-you.svg';
import OpinionRating from './OpinionComponent.js';
import './ThanksMessage.css';


 function message(){
    const pollo='pollo'
    return (
        <>
        <div className="container">
            <img className="invoice" src={thanks} alt="invoice"></img>
            <p className="info">You selected {pollo} of 5</p>
         <h1 className="thankYou">Thank You!</h1>
         <p className="appreciateMessage">We appreciate you taking the time to give a rating. If you ever need more support, 
         don't hesitate to get in touch</p>
        </div>
        </>
    )
}

export default message;