import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faBed, faCab, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import './header.css'
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const Header = ({type}) => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]); 
    

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1,
    });
    
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "inc" ? options[name]+1 : options[name]-1, 
            }
        })
    }

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload:{  destination, dates, options} })
        navigate("/hotels", { state : { destination, dates, options } })
    }
    
  return (
    <div className='header'>
        <div className={type=== "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCab} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            { type !== "list" && 
              <>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">
                    Get rewarded for your travels unlock instant savings of 10% or more
                    with a free SulekhBooking account
                </p>
                {!user && <button className="headerBtn">Sign in/ Register</button>}
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faBed} />
                        <input 
                            type="text"
                            placeholder='Where Are You Going?' 
                            className="headerSearchInput" 
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faCalendarDays} />
                        <span
                            onClick={() => setOpenDate(!openDate)} 
                            className="headerSearchText"
                        >
                            {`${format(dates[0].startDate, "dd/MM/yyyy")} to 
                            ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className='date'
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                        <span
                            className="headerSearchText"
                            onClick={() => setOpenOptions(!openOptions)}
                        >
                            {`${options.adult} adult . ${options.children} children . ${options.rooms} rooms`}
                        </span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">adult</span>
                                <div className="optionCounter">
                                    <button 
                                        disabled={options.adult <= 1}
                                        className="optionCounterButton" 
                                        onClick={() => handleOption("adult", "dec")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button 
                                        className="optionCounterButton" 
                                        onClick={() => handleOption("adult", "inc")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">children</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.children <= 0} 
                                        className="optionCounterButton" 
                                        onClick={() => handleOption("children", "dec")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button 
                                        className="optionCounterButton" 
                                        onClick={() => handleOption("children", "inc")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">rooms</span>
                                <div className="optionCounter">
                                    <button 
                                        disabled={options.rooms <= 1}
                                        className="optionCounterButton" 
                                        onClick={() => handleOption("rooms", "dec")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">{options.rooms}</span>
                                    <button 
                                        className="optionCounterButton" 
                                        onClick={() => handleOption("rooms", "inc")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                        <button className="headerBtn" onClick={() => handleSearch()}>search</button>
                    </div>
                </div>
              </>}
        </div>
    </div>
  )
}

export default Header