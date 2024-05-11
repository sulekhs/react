import React from 'react';
import { Link } from 'react-router-dom';
import './searchitem.css';

const Searchitem = ({item}) => {
  return (
    <div className='searchItem'>
        <img 
            src={item.photos[0]}
            alt="" 
            className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}m from center</span>
            <span className="siTaxiOp">Free Airport Taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air Conditioning
            </span>
            <span className="siFeatures">
                {item.desc}
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            {item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailtexts">
                <span className="siPrice">${item.cheapestPrice}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <Link to={`/hotels/${item._id}`} >
                    <button className="siCheckbutton">See Availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Searchitem