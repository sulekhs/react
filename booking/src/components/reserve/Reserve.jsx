import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import './reserve.css';

const Reserve = ({ setOpenSlider, hotelId }) => {

  const [selectedRooms, setSelectedRooms] = useState([]);  
  const { data, loading, error } = useFetch(`/hotels/rooms/${hotelId}`);
  const navigate = useNavigate();
  const {dates} = useContext(SearchContext);
    
  const getDatesInRange = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const date = new Date(start.getTime());

      let dates = [];

      while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate()+1);
      }
      return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const handleSelect = (e) => {
     const checked = e.target.checked;
     const value = e.target.value;
     setSelectedRooms(
         checked 
            ? [...selectedRooms, value] :
            selectedRooms.filter((item) => item !== value)
     );
  };

  const isAvailable = (roomNumber) => {
      const isFound = roomNumber.unavailableDates.some((date) => 
          allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  }

  console.log(selectedRooms);

  const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                const res = axios.put(`/rooms/availability/${roomId}`,{dates:allDates});
                return res.data;
            }));
            setOpenSlider(false);
            navigate("/")
        } catch (err) {
            
        }
  }

  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon 
               icon={faCircleXmark}
               className="rClose" 
               onClick={()=>setOpenSlider(false)}
            />
            <span>Select your rooms!</span>
            {data.map((item) => (
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">
                            Max people : <b>{item.maxPeople}</b>
                        </div>
                        <div className='rPrice'>{item.price}</div>
                    </div>
                    <div className="rSelecteRooms">
                        {item.roomNumbers.map((roomNumber) => (
                            <div className="room">
                                <label>{roomNumber.number}</label>
                                <input 
                                type="checkbox" 
                                value={roomNumber._id} 
                                onChange={handleSelect} 
                                disabled={!isAvailable(roomNumber)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={handleClick} className="rButton">Reserve now!</button>
        </div>
    </div>
  )
}

export default Reserve