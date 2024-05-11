import React from 'react'
import useFetch from '../../hooks/useFetch';
import './propertyList.css';

const PropertyList = () => {

  const { data, loading, error } = useFetch("/hotels/countByType");
  console.log(data);  


  const images = [
    "https://i.ibb.co/SJn1V1T/hotel05.jpg",
    "https://i.ibb.co/G59M50p/hotel06.jpg",
    "https://i.ibb.co/6XZBsSk/hotel07.jpg",
    "https://i.ibb.co/M2pgPpM/hotel08.jpg"
  ]

  return (
    <div className='pList'>
        {
          loading ? ("loading please wait"
          ) : (
              <>
                {data &&
                    images.map((img,i) => (
                        <div className="pListItem" key={i}>
                            <img 
                                src={img} 
                                alt="" 
                                className='pListImg'
                            />
                            <div className="pListTitles">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))
                }
              </>
          )
        }
    </div>
  )
}

export default PropertyList