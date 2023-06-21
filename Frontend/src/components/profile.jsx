import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { newuser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/")
    };

    return (
        <div className="p-20 flex max-h-screen h-90 flex-col items-center justify-center mt-10">
            <div className='p-4 mt-4 text-3xl font-bold text-white'>
                Hello {newuser.Name} , Traveller.com Welcomes you !!
            </div>
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-center">
                    <img
                        className="w-32 h-32 object-cover rounded-full mt-5"
                        src="https://cdn-icons-png.flaticon.com/512/219/219970.png" // Replace with the actual photo URL
                        alt="Profile"
                    />
                </div>
                <div className="text-center px-6 py-4">
                    <h2 className="text-xl font-bold text-black">
                        Name : {newuser.Name} {/* Replace with the actual name */}
                    </h2>
                    <p className="mt-2 text-sm text-black">
                        Age: {newuser.age} {/* Replace with the actual age */}
                    </p>
                    <p className="mt-2 text-sm text-black">
                        Email: {newuser.email} {/* Replace with the actual email */}
                    </p>
                    <button
                        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
