import React from 'react'
import topDestination from '../topDestinations.json'

const topdestination = () => {
    const destinations = topDestination;


    return (
        <div className='bg-slate-900 p-20 rounded shadow-md w-screen min-h-screen mt-4 mb-4 '>
            <div className="text-4xl text-white mt-20 font-bold text-center text ">Our Top destination picks just for you .......</div>
            <div className="w-4/5 mt-2 p-15 min-h-screen mx-auto rounded-lg bg-slate-900 drop-shadow-2xl flex flex-col justify-center">
                {
                    destinations.map((destination) => (
                        <a target="_blank" href={`https://www.google.com/search?q=${destination.name}`} className="max-w-screen mt-8 flex flex-row rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                            <img
                                className="p-2 w-full h-32 object-cover"
                                src={destination.image}
                                alt="Some Image"
                            />
                            <div className="px-6 py-4 flex flex-col p-2">
                                <div className="font-bold text-xl mb-2">{destination.name}</div>
                                <p className="text-gray-700 text-base">{destination.description}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>

    )
}

export default topdestination
