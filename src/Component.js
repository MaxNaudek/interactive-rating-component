import Star from './images/icon-star.svg'
import './Component.css';

function OpinionRating(){
    return (
    <div className="main-component">
        <div className="circle">
            <img className="star" src={Star} alt="star"></img>
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="button-container">
            <button className="button-rating">1</button>
            <button className="button-rating">2</button>
            <button className="button-rating">3</button>
            <button className="button-rating">4</button>
            <button className="button-rating">5</button>
        </div>
        <button className="submit">SUBMIT</button>
    </div>
    )

}

export default OpinionRating;