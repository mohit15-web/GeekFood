import React, { useEffect, useState } from "react";
import data from "../Restaurant.js";
import { ImSpoonKnife, ImLocation } from "react-icons/im";

function Restaurants() {
  // const [data, setData] = useState([])
  // const fetchData = async () => {
  //   let res = await fetch("https://type.fit/api/quotes")
  //   let result = await res.json()
  //   setData(result);
  // }

  // useEffect(() => {
  //   fetchData()
  // },[])
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="pt-40 py-5">
        <input
          type="text"
          placeholder="Search restaurant....."
          className="border p-2 ml-40 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-8">
        {data
          .filter((card) => card.name.toLowerCase().includes(search.toLowerCase()))
          .map((card) => (
            <div
              key={card._id.$oid}
              className="w-96 border  shadow-lg rounded-xl pt-4"
            >
              <h1 className="px-4 text-xl font-bold">
                {card.name} ⭐⭐⭐⭐⭐{" "}
              </h1>
              <div className="flex items-center gap-2 px-4 py-2">
                <ImLocation />
                <p>{card.address} {" ,"} {card["address line 2"]} </p>
              </div>
              <p className="px-5 mb-10">
                {card.outcode} {card.postcode}{" "}
              </p>
              <div className="bg-slate-100 p-4">
                <div className="flex items-center gap-2 text-green-400 ">
                  <ImSpoonKnife />
                  <h1 className="text-lg">{card.type_of_food}</h1>
                </div>
                <a href={card.URL} className="text-blue-500" target="_blank">
                  Visit Menu
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Restaurants;
