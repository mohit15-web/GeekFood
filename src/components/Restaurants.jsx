import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';

function Restaurants() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    let res = await fetch("https://type.fit/api/quotes")
    let result = await res.json()
    setData(result); 
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>
      <RestaurantCard cards={data}/>
    </div>
  )
}

export default Restaurants