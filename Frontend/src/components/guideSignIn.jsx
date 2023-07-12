import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const guideSignIn = () => {

  const Navigate = useNavigate();
    const { glogin } = useContext(AuthContext)

  const [user, setuser] = useState({
    email: "",
    password: ""
  })

  const getDetails = async (event) => {
    event.preventDefault();
    const { email, password } = user;


    try {

      const response = await fetch("/complogin", {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      if (response.ok) {
        const data = await response.json();
        const newToken = data;
        glogin(newToken); // Set the token in the AuthContext
        console.log("Token Sent", newToken)
        Navigate("/guide_details")
      } else {
        console.log("Some error occurred");
      }

    } catch (error) {
      console.log(error);
    }

  }

  

  const navigator = () => {
    Navigate("/guide_login")
  }

  const handleChange = (event) => {
    setuser({ ...user, [event.target.id]: event.target.value });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-white">Guide SingIN :-)</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
            <div className="mt-2">
              <input onChange={handleChange} id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>

            </div>
            <div className="mt-2">
              <input id="password" onChange={handleChange} name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" onClick={getDetails} className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not Yet Registered
          <a className="font-semibold leading-6 text-green-600 hover:text-green-500" onClick={navigator}>Create Account Here</a>
        </p>
      </div>
    </div>
  )
}

export default guideSignIn
