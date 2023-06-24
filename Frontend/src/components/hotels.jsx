// 'X-RapidAPI-Key': '97849bb31cmsh81877c4ff611028p13ade7jsnf95e5ac1318d', used external api "hotel com Provider" form "rapid api"


import React from 'react'


const hotels = async ()  => {

   
  return (
    <div>
		<div className="max-w-xl lg:max-w-lg">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">We will find the best for you ...</h2>
                                <p className="mt-4 text-lg leading-8 text-gray-300">
                                    Enter the name of the state you want to journey from in the search box below
                                </p>
                                <div className="mt-6 flex max-w-md gap-x-4">
                                    <label htmlFor="location" className="sr-only">
                                        Enter the state you want to explore
                                    </label>
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        onChange={handleChange}
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        placeholder="Enter name of state"
                                    />
                                    <button
                                        onClick={search}
                                        type="submit"
                                        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
      
    </div>
  )
}

export default hotels
