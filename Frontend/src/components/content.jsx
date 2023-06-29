import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function content() {

  



  return (
    <div className='flex flex-row flex-grow justify-self-auto	mt-20 p-20 '>
      {/* Card one */}
      <Link to="/travelogue" className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" >
        <img className="w-full h-56 object-cover" src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/12/Dream-Vacation-Now.jpg" alt="Card Image" />
        <div className="p-4">
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Plan your travels</h3>
          <p className="text-gray-600">We find the best place of each state with our exclusive sevice of guide and hotels plan with us rest assured . </p>
          {/* <a href="#" className="text-blue-500 inline-flex items-center mt-4">Read More</a> */}
        </div>
      </Link>

      <Link to="/guide_login" className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" >
        <img className="w-full h-56 object-cover" src="https://www.vyootrip.com/wp-content/uploads/2021/09/razones-agencia-de-viajes-corporativos.jpeg" alt="Card Image" />
        <div className="p-4">
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Guides ! Register with us </h3>
          <p className="text-gray-600">Know your locality then work with us and help travelers all around to explore your state . We pay for your sevices .</p>
          {/* <a href="#" className="text-blue-500 inline-flex items-center mt-4">Read More</a> */}
        </div>
      </Link>

      <Link to="/top-destination" className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105" >
        <img className="w-full h-56 object-cover" src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/637048363b9c9d4a3b1af375_BEST%20PLACES%20TO%20TRAVEL.webp" alt="Card Image" />
        <div className="p-4">
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Top destination picks .....</h3>
          <p className="text-gray-600">Here's the list of top destinations in India that we sortlisted begin your journey to these amazing places .</p>
          {/* <a href="#" className="text-blue-500 inline-flex items-center mt-4">Read More</a> */}
        </div>
      </Link>


    </div>
  )
}

export default content
