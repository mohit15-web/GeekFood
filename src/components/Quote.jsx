import React, { useEffect, useState } from 'react'

function Quote() {
  const [apiData,setApiData] = useState([])
  async function fetchQuotes() {

    try {
        const response = await fetch("https://type.fit/api/quotes")
        const result = await response.json();
        setApiData(result)
    } catch (error) {
        console.error('Error');
    }
}

// Example usage:
  useEffect(() => {
    fetchQuotes();
  } , [])
  return (
    <div className='pt-20'>
      {apiData.map((item,idx) => (
        <div className='flex justify-center flex-col items-center border p-10 m-10 gap-6 shadow-md'>
        <h1 className='text-4xl font-bold'>{item.text}</h1>
        <p>{item.author} </p>
        </div>
      ))}
    </div>
  )
}

export default Quote