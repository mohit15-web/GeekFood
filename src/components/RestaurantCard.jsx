import React from 'react'

function RestaurantCard({cards}) {
    console.log("resaturant",cards);
  return (
    <div className='flex flex-wrap gap-6 justify-center pt-40'>

    {cards.map((card,idx) => (
        <div key={idx} className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{card.text}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {card.author}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile &rarr;
          </button>
        </div>
      </div>
    ))}
    </div>
  )
}

export default RestaurantCard