import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login_page = () => {
  const [user, setUser] = useState({
    Name: '',
    age: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const saveUser = async (event) => {
    event.preventDefault();
    const { Name, age, email, password } = user;

    try {
      const response = await fetch('/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name,
          age,
          email,
          password
        })
      });

      if (response.ok) {
        console.log('User saved to data');
        navigate('/'); // Redirect to home page after successful login
      } else {
        console.log('Data not saved');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const Navigate = () => {
    navigate('/User_signIn');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-slate-900 p-8 rounded shadow-md sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold text-center mb-4 text-white">Create New User Account</h2>
          <form>
            <div className="mb-4 text-white text-sm">
              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input
                type="text"
                id="Name"
                className="w-full border border-gray-300 rounded text-black py-2 px-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 text-white text-sm">
              <label htmlFor="age" className="block mb-2">
                Age:
              </label>
              <input
                type="number"
                id="age"
                className="w-full border border-gray-300 rounded text-black py-2 px-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 text-white text-sm">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded text-black py-2 px-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 text-white text-sm">
              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded text-black py-2 px-3"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between">
              <button
                type="submit"
                onClick={saveUser}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0"
              >
                Create Account
              </button>
              <button
                type="submit"
                onClick={Navigate}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login_page;
