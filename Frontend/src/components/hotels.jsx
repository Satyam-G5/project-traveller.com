import { React, useState, useEffect ,useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const hotels = () => {


  const [hotels, setHotels] = useState([])
  const { book_hotel}= useContext(AuthContext)

  useEffect(() => {
    fetchdata();
  }, []
  )

  const fetchdata = async () => {
    try {
      const response = await fetch('/gethotels');
      console.log('Request sent');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log(jsonData);

      setHotels(jsonData);
      console.log('Response received');
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  const book_my_hotel = (HotelName , s_price , d_price, locationcity) => {
    book_hotel(HotelName , s_price , d_price, locationcity);
    console.log(HotelName);
  };


  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 ">
        <h2 className=" text-3xl font-bold text-white sm:text-4xl"> Hotels that make you feel home </h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          || Your comfort our necessity  ||
        </p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="location" className="sr-only">
            Enter the loction U want to book hotel 
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter Location"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-18 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((data) => (
            <div
              key={data._id}
              className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex justify-center">
                <img
                  className="w-32 h-32 object-cover rounded-full mt-5"
                  src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                  alt="Profile"
                />
              </div>
              <div className="text-center px-6 py-4">
                <h2 className="text-xl font-bold text-black">Hotel Name: {data.Hname}</h2>
                <p className="mt-2 text-sm text-black">Single Room Price: {data.singleroomprice}</p>
                <p className="mt-2 text-sm text-black">Double Room Price: {data.doubleroomprice}</p>
                <p className="mt-2 text-sm text-black">Total Single Room: {data.totalsinglerooms}</p>
                <p className="mt-2 text-sm text-black">Total Double Room: {data.totaldoublerooms}</p>
                <p className="mt-2 text-sm text-black">Location: {data.locationcity} , {data.locationstate}</p>
                  <Link to="/plans">
                <button className="mt-4 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={()=>book_my_hotel(data.Hname ,data.singleroomprice , data.doubleroomprice , data.locationcity)}
                >
                    Book
                </button>
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default hotels
