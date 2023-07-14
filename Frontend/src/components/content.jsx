import React from 'react';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div className="flex flex-wrap justify-center mt-20 mb-15 p-5">
      {/* Card one */}
      <Link
        to="/travelogue"
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      >
        <img
          className="w-full h-56 object-cover"
          src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/12/Dream-Vacation-Now.jpg"
          alt="Card Image"
        />
        <div className="p-4">
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Complete State Tourism</h3>
          <p className="text-gray-600">
            We find the best place of each state with our exclusive service of guide and hotels plan with us rest
            assured.
          </p>
        </div>
      </Link>

      {/* Card two */}
      <Link
        to="/guide_login"
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      >
        <img
          className="w-full h-56 object-cover"
          src="https://www.vyootrip.com/wp-content/uploads/2021/09/razones-agencia-de-viajes-corporativos.jpeg"
          alt="Card Image"
        />
        <div className="p-4">
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Guides! Register with us</h3>
          <p className="text-gray-600">
            Know your locality then work with us and help travelers all around to explore your state. We pay for your
            services.
          </p>
        </div>
      </Link>

      {/* Card three */}
      <Link
        to="/top-destination"
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      >
        <img
          className="w-full h-56 object-cover"
          src="https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/637048363b9c9d4a3b1af375_BEST%20PLACES%20TO%20TRAVEL.webp"
          alt="Card Image"
        />
        <div className="p-4">
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Top destination picks...</h3>
          <p className="text-gray-600">
            Here's the list of top destinations in India that we shortlisted. Begin your journey to these amazing places.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Content;

