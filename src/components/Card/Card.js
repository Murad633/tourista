import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import {Link} from 'react-router-dom'
import './Card.css'

export function Card({image, sparkles, loved, cardTrip, cardTitle, tripDays, tripValue, from}) {
    const isLovedAndSparklesPresent = loved !== null && sparkles !== null;
    return(
            <div className="card--wrapper">
            <div className="img-part">
                <img src={image} alt="" />
                <div className={isLovedAndSparklesPresent ? "img-status1" : "img-status2"}>
                    {isLovedAndSparklesPresent && 
                    <div className="img-loved">
                        <img src={sparkles} alt="" />
                        <span>{loved}</span>
                    </div>}
                    <button className="img-save">
                        <FontAwesomeIcon icon={faBookmark} style={{color: "#4a21ef", width: "20px", height: "20px"}} />
                    </button>
                </div>
            </div>
                <div className="card--text">
                    <p className='card-trip'>{cardTrip}</p>
                    <Link className='card-link'><p className='card-title'>{cardTitle}</p></Link>
                    <div className='trip-title'>
                        <span className='trip-days'>{tripDays}</span>
                        <div className='trip-price'><span className='price-from'>{from}</span><span className='trip-value'>{tripValue}</span></div>
                    </div>
                </div>
        </div>
    )
}