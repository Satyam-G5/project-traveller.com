import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuideLogin = () => {
  const [user, setUser] = useState({
    Name: '',
    age: '',
    location: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const saveUser = async (event) => {
    event.preventDefault();
    const { Name, age, location, email, password } = user;

    try {
      const response = await fetch('/newcomp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name,
          age,
          location,
          email,
          password
        })
      });

      if (response.ok) {
        console.log('User saved to data');
        navigate('/guides'); // Redirect to home page after successful guide login
      } else {
        console.log('Data not saved');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tosignin = () => {
    navigate('/guide_signIN');
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value }); // dealing with the onchange event
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-4 mt-20 border-yellow-400">
        <div className="bg-slate-900 p-8 mx-auto rounded shadow-md w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-white">Create Guide Account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-white">
                Name:
              </label>
              <input
                type="text"
                id="Name"
                className="w-full border border-gray-300 rounded py-2 px-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-white">
                Enter location State:
              </label>
              <input
                type="text"
                id="location"
                className="w-full border border-gray-300 rounded py-2 px-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block mb-2 text-white">
                Age:
              </label>
              <input
                type="number"
                id="age"
                className="w-full border border-gray-300 rounded py-2 px-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded py-2 px-3"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-white">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded py-2 px-3"
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
                onClick={tosignin}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
              >
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default GuideLogin;
