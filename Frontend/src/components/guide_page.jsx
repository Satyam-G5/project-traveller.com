import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const GuidePage = () => {
  const { logout, newguide } = useContext(AuthContext);
  const navigator = useNavigate();
  const [gemail, setGemail] = useState({
    gmail: ''
  });
  const [travel, setTravel] = useState([
    {
      HotelName: '',
      amount: '',
      doubleRoom: '',
      email: '',
      gmail: '',
      _id: '',
      hotelLocation: '',
      guideName: '',
      singleRoom: '',
      stateName: '',
      userName: '',
      jdate: ''
    }
  ]);

  const handleLogout = () => {
    logout();
    navigator('/');
  };

  useEffect(() => {
    if (newguide.email) {
      setGemail({
        gmail: newguide.email
      });
    } else {
      console.log('Email not found');
    }
  }, [newguide.email]);

  useEffect(() => {
    if (gemail.gmail) {
      fetchdata();
    }
  }, [gemail.gmail]);

  const fetchdata = async () => {
    try {
      const { gmail } = gemail;
      console.log('Fetching data for:', gmail);

      const response = await fetch('/guideTravelData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gmail
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Received data:', data);

        if (data.length > 0) {
          const firstItem = data[0];
          console.log('First item:', firstItem);

          setTravel([
            {
              HotelName: firstItem.HotelName,
              amount: firstItem.amount,
              doubleRoom: firstItem.doubleRoom,
              email: firstItem.email,
              gmail: firstItem.gmail,
              guideName: firstItem.guideName,
              hotelLocation: firstItem.hotelLocation,
              singleRoom: firstItem.singleRoom,
              stateName: firstItem.stateName,
              userName: firstItem.userName,
              jdate: firstItem.jdate,
              _id: firstItem._id
            }
          ]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(travel);
  }, [travel]);

  return (
    <div className="bg-white mt-8 p-4 text-center">
      <div className="p-4 mt-10 text-3xl font-bold text-black">
        <p className="text-green-700 p-1">{newguide.Name}</p> Welcomes back to Traveller.com!!
      </div>
      <div className="bg-white flex flex-col md:flex-row">
        <div className="p-5 md:w-1/3 flex items-center justify-center mt-2">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center">
              <img
                className="w-32 h-32 object-cover rounded-full"
                src="https://static.thenounproject.com/png/3359819-200.png" // Replace with the actual photo URL
                alt="Profile"
              />
            </div>
            <div className="text-center px-6 py-4">
              <h2 className="text-xl font-bold text-black">Name: {newguide.Name}</h2>
              <p className="mt-2 text-sm text-black">Age: {newguide.age}</p>
              <p className="mt-2 text-sm text-black">Email: {newguide.email}</p>
              <button
                className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 md:w-2/3">
          <div className="mx-auto w-max p-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center text-xl font-bold text-black">
              No. of customers who have booked you!! (Please contact customers as soon as possible)
            </div>
            <div className="text-left max-w-2/3 px-6 py-4">
              {travel.map(item => (
                <div className="mb-6" key={item._id}>
                  <div className="flex flex-row p-1 justify-between">
                    <p className="font-bold text-green-700">Customer Name:</p>
                    <p className="text-black">{item.userName}</p>
                  </div>
                  <div className="flex flex-row p-1 justify-between">
                    <p className="font-bold text-green-700">State Tourism Package:</p>
                    <p className="text-black">
                      {item.stateName} Tour
                    </p>
                  </div>
                  <div className="flex flex-row p-1 justify-between">
                    <p className="font-bold text-green-700">Journey Date:</p>
                    <p className="text-black">
                      {item.jdate}
                    </p>
                  </div>
                  <div className="flex flex-row p-1 justify-between">
                    <p className="font-bold text-green-700">Hotel Booked:</p>{' '}
                    <p className="text-black">{item.HotelName}, {item.hotelLocation}, {item.stateName}</p>
                  </div>
                  <div className="flex flex-row p-1 justify-between">
                    <p className="font-bold text-green-700">Total Amount Paid:</p>
                    <p className="text-black">{item.amount}</p>
                  </div>
                  <div className="flex flex-row p-1 justify-between">
                    <p className="font-bold text-green-700">Contact Info:</p>
                    <p className="text-black">{item.email}</p>
                  </div>
                  {/* <button className="mt-4 p-2 bg-red-500 hover:bg-green-700 text-white flex justify-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <p>Accept</p>
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidePage;
