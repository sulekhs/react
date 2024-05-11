import React, { useState } from 'react';
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Searchitem from '../../components/searchItem/Searchitem';
import useFetch from '../../hooks/useFetch';

const List = () => {

  const location = useLocation();
  console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(`/hotels/hotelByPrice?city=${destination}&min=${min || 10}&max=${max || 999}`);
  console.log(data);

  const handleClick = () => {
    reFetch();
  }


  return (
    <div>
        <Navbar/>
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="listSearchTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} to 
                    ${format(dates[0].endDate, "dd/MM/yyyy")} `}
                </span>
                {openDate && <DateRange 
                  onChange={(item)=>setDates([item.selection])} 
                  minDate={new Date()} 
                  ranges={dates}
                />}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>(per night)</small>
                  </span>
                  <input min={0} type="number" onChange={(e) => setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>(per night)</small>
                  </span>
                  <input type="number" min={0} onChange={(e) => setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input 
                    type="number" 
                    min={1}
                    className="lsOptionInput" 
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input 
                    type="number" 
                    min={0}
                    className="lsOptionInput" 
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Rooms
                  </span>
                  <input 
                    type="number" 
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.rooms}
                  />
                </div>
              </div>
              <button onClick={handleClick} >Search</button>
            </div>
            <div className="listResult">
              {loading ? ("loading page"
              ) : (
                <>
                  {data.map((item) => (
                    <Searchitem item={item} key={item._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default List