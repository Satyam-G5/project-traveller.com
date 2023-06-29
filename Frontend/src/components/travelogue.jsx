import React, { useContext, useState } from 'react';
import touristPlace from "../touristPlace.json";
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const travelogue = () => {

    const { loggedin } = useContext(AuthContext);

    const [location, setlocation] = useState("");
    const [foundPlace, setfoundPlace] = useState(null);

    const navigator = () => {
        Navigate(`https://www.google.com/search?q=${foundPlace.tourist_places[0].place}`)
    }

    const handleChange = (event) => {
        const value = event.target.value
        setlocation(value)
        console.log("value captured")
    }

    const search = () => {
        const foundPlace = touristPlace.find((place) =>
            place.state.toLowerCase().includes(location.toLowerCase())
        );

        if (foundPlace) {
            setfoundPlace(foundPlace)
            console.log("Found the place:", foundPlace.state);
        } else {
            console.log("Place not found");
        }
    };

    return (
        <>
            {!loggedin ? (
                <div className='mt-24 p-8 text-center '>
                    <h1 className='text-center font-bold text-3xl text-white'>Please Sign In to continue ...</h1>

                </div>

            ) : (
                <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
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
                            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                <Link to="/guides">
                                    <div className="border-white border-2 p-2 flex flex-col items-start hover:cursor-pointer hover:bg-slate-950 rounded-lg hover:scale-x-105 hover:translate-y-1 transition ease-in-out duration-300 ">

                                        <dt className="mt-4 font-semibold text-white ">Choose Guide</dt>
                                        <dd className="mt-2 leading-7 text-gray-400">
                                            Our guide are know what's best for you , with all the local knowledge they are bound to make journey smooth one .
                                        </dd>
                                    </div>
                                </Link>
                                <Link to="/hotels">
                                    <div className="border-white border-2 p-2 flex flex-col items-start  hover:cursor-pointer hover:bg-slate-950 rounded-lg hover:scale-x-105 hover:translate-y-1 transition ease-in-out duration-300">

                                        <dt className="mt-4 font-semibold text-white">Choose Hotels</dt>
                                        <dd className="mt-2 leading-7 text-gray-400">
                                            We help in finding you the best hotel , with all our trusted partners you can be rest assured for your journey .
                                        </dd>
                                    </div>
                                </Link>
                            </dl>
                        </div>
                        {foundPlace && (
                            <div className="mt-8">
                                <div>
                                    <h3 className="p-2 text-2xl font-semibold text-white">{foundPlace.state.toUpperCase()}</h3>
                                    <h3 className="p-2 text-2xl font-semibold text-white">  Description :</h3>
                                    <p className="text-gray-300">{foundPlace.description}</p>
                                    <h3 className="p-2 text-2xl font-semibold text-white">  Climate :</h3>
                                    <p className="text-gray-300">{foundPlace.climate}</p>
                                    <h3 className="p-2 text-2xl font-semibold text-white">  Food :</h3>
                                    <p className="text-gray-300">{foundPlace.food}</p>
                                    <h3 className="p-2 text-2xl font-semibold text-white">  Best Time to Visit :</h3>
                                    <p className="text-gray-300">{foundPlace.best_time_to_visit}</p>
                                </div>
                                <a target="_blank" href={`https://www.google.com/search?q=${foundPlace.tourist_places[0].place}`} className="max-w-screen mt-8 flex flex-row rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">


                                    <img
                                        className="p-2 w-full h-32 object-cover"
                                        src={foundPlace.tourist_places[0].image}
                                        alt="Some Image"
                                    />
                                    <div className="px-6 py-4 flex flex-col p-2">
                                        <div className="font-bold text-xl mb-2">{foundPlace.tourist_places[0].place}</div>
                                        <p className="text-gray-700 text-base">{foundPlace.tourist_places[0].description}</p>
                                    </div>
                                </a>
                                <a target="_blank" href={`https://www.google.com/search?q=${foundPlace.tourist_places[1].place}`} className="max-w-screen mt-8 flex flex-row rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                                    <img
                                        className="p-2 w-full h-32 object-cover"
                                        src={foundPlace.tourist_places[1].image}
                                        alt="Some Image"
                                    />
                                    <div className="px-6 py-4 flex flex-col p-2">
                                        <div className="font-bold text-xl mb-2">{foundPlace.tourist_places[1].place}</div>
                                        <p className="text-gray-700 text-base">{foundPlace.tourist_places[1].description}</p>
                                    </div>
                                </a>
                                <a target="_blank" href={`https://www.google.com/search?q=${foundPlace.tourist_places[2].place}`} className="max-w-screen mt-8 flex flex-row rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">

                                    <img
                                        className="p-2 w-full h-32 object-cover"
                                        src={foundPlace.tourist_places[2].image}
                                        alt="Some Image"
                                    />
                                    <div className="px-6 py-4 flex flex-col p-2">
                                        <div className="font-bold text-xl mb-2">{foundPlace.tourist_places[2].place}</div>
                                        <p className="text-gray-700 text-base">{foundPlace.tourist_places[2].description}</p>
                                    </div>
                                </a>


                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default travelogue
