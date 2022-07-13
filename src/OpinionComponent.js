import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import Star from './images/icon-star.svg'
import './OpinionComponent.css';

function OpinionRating(){

  const useTest=()=>{
    
  }
    const [change, setchange] = useState(false);
    const [change2, setchange2] = useState(false);
    const [change3, setchange3] = useState(false);
    const [change4, setchange4] = useState(false);
    const [change5, setchange5] = useState(false);

    const handleClick = () => {
         setchange(current => !current);
         setchange2 (false); 
         setchange3 (false); 
         setchange4 (false);
         setchange5 (false);
      };
    const handleClick2 = () => {
        setchange (false); 
        setchange2(current => !current);
        setchange3 (false); 
        setchange4 (false); 
        setchange5 (false);
      };
    const handleClick3 = () => {
        setchange (false); 
        setchange2 (false); 
        setchange3(current => !current);
        setchange4 (false); 
        setchange5 (false);
      };
    const handleClick4 = () => {
        setchange (false); 
        setchange2 (false); 
        setchange3 (false); 
        setchange4(current => !current);
        setchange5 (false);
      };
    const handleClick5 = () => {
        setchange (false);
        setchange2 (false); 
        setchange3 (false); 
        setchange4 (false); 
        setchange5(current => !current);
      };

    // const pollo= backgroundColor: change ? 'salmon' : '',
    //     color: change ? 'white' : ''
    
 
        return (
    <div className="main-component">

        <div className="circle">
            <img className="star" src={Star} alt="star"></img>
        </div>

        <h1 className="question">How did we do?</h1>
        
        <p className="feedback">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="button-container">

            <button className="button-rating" 
                style={{
                backgroundColor: change ? 'salmon' : '',
                color: change ? 'white' : ''
             }}
            onClick={handleClick} props='1'>1</button>
         {/* {console.log(<button className="button-rating">1</button>.children)} */}
            <button className="button-rating"
            style={{
                backgroundColor: change2 ? 'salmon' : '',
                color: change2 ? 'white' : '',
              }}
              onClick={handleClick2}>2</button>
              
              <button className="button-rating"
            style={{
                backgroundColor: change3 ? 'salmon' : '',
                color: change3 ? 'white' : '',
              }}
              onClick={handleClick3}>3</button>

            <button className="button-rating"
            style={{
                backgroundColor: change4 ? 'salmon' : '',
                color: change4 ? 'white' : '',
              }}
              onClick={handleClick4}>4</button>

            <button className="button-rating"
            style={{
                backgroundColor: change5 ? 'salmon' : '',
                color: change5 ? 'white' : '',
              }}
              onClick={handleClick5}>5</button>
        </div>
        <nav>
          <Link to="/thanks">   
          <button className="submit">SUBMIT</button>
          </Link>
        </nav>      
    </div>
    )
}

export default OpinionRating;