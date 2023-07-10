import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Image from "../download2.png"

import { AuthContext } from '../context/AuthContext';



function navbar() {


    const { newuser } = useContext(AuthContext)
    // console.log("From Navbar", newuser);
    return (



        <nav className=" w-full h-20 bg-white fixed top-0 flex justify-between rounded-lg">

            <div className="rounded-lg">
                <img className="p-2 w-50 h-20 object-cover  " src={Image} alt="Card Image" />

            </div>
            <div className="flex flex-row justify-evenly mt-1 mr-2">
                <Link to="/" className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Home</Link>
                <Link to ="/hotels" className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Hotels</Link>
                <Link to ="/guides" className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Guide</Link>
                <Link to="/top-destination" className='text-xl text-gray-600 p-6 hover:cursor-pointer hover:text-gray-950 '>Top Destination</Link>
            </div>


            <div className=" mt-3.5 mr-2 justify-center">
                <div className='p-2  bg-green-700 rounded-lg hover:bg-green-900 hover:cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y+1 hover:scale-105'>
                    {newuser ? (
                        <Link className="text-xl text-white w-1/6 h-8" to="/user_profile"  >
                            {newuser.Name}

                        </Link>
                    ) : (
                        <Link className="text-xl text-white w-1/6 h-8" to="/User_login">
                            Create Account
                        </Link>
                    )}
                </div>

            </div>
        </nav>

    )
}

export default navbar
