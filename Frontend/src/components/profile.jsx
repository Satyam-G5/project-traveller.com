import React, { useContext , useState , useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { newuser, logout , newguide} = useContext(AuthContext);
    const navigate = useNavigate();

    const [gemail, setGemail] = useState({
        email: ""
    });
    const [travel, setTravel] = useState([{
        HotelName: "",
        amount: "",
        doubleRoom: "",
        email: "",
        gmail: "",
        _id: "",
        hotelLocation: "",
        guideName: "",
        singleRoom: "",
        stateName: "",
        userName: "",
        jdate : ""
    }]);


    useEffect(() => {
        if (newuser && newuser.email) {
          setGemail({
            email: newuser.email
          });
        } else {
          console.log("Email not found");
        }
      }, [newuser?.email]);

    useEffect(() => {
        if (gemail.email) {
            fetchdata();
        }
    }, [gemail.email]);

    const fetchdata = async () => {
        try {
            const { email } = gemail;
            console.log("Fetching data for:", email);

            const response = await fetch("/userTravelData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Received data:", data);

                if (data.length > 0) {
                    const firstItem = data[0];
                    console.log("First item:", firstItem);

                    setTravel([{
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
                        _id: firstItem._id,
                    }]);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(travel);
    }, [travel]);

    console.log(travel.userName)

    const handleLogout = () => {
        logout();
        navigate("/")
    };


    return (
        <div className='  mt-8 p-4 text-center'>
            <div className='p-4 mt-10 text-3xl font-bold text-white'>
                Hello {newuser.Name} , Traveller.com Welcomes you !!
            </div>
        <div className="p-2 mt-8 flex max-h-screen h-90 flex-row items-center justify-center ">
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
                <div className="p-2 mt-8 flex min-w-screen w-2/3 max-h-screen h-90 flex-col justify-center ">

                    <div className=" mx-auto w-max p-2 bg-white shadow-lg rounded-lg overflow-hidden ">
                        <div className="flex justify-center text-xl font-bold text-black">
                            Travel Pakage Booked Successfully !! (Guide will contact you as soon as possible)
                        </div>
                        <div className="text-left px-6 py-4">
                            {travel.map((item) => (
                                <div className='' key={item._id}>
                                    <div className='flex flex-row p-1 justify-between'><p className='font-bold text-green-700'>State Tourism Pakage :</p> <p className='text-black'> {item.stateName} Tour</p></div>
                                    <div className='flex flex-row p-1 justify-between'><p className='font-bold text-green-700'>Journey Date :</p> <p className='text-black'> {item.jdate}</p></div>
                                    <div className='flex flex-row p-1 justify-between'><p className='font-bold text-green-700'>Guide Name:</p> <p className='text-black'>{item.guideName}</p></div>
                                    <div className='flex flex-row p-1 justify-between'><p className='font-bold text-green-700'>Hotel Booked : </p> <p className='text-black'>{item.HotelName} , {item.hotelLocation} ,{item.stateName}</p></div>
                                    <div className='flex flex-row p-1 justify-between'><p className='font-bold text-green-700'>Total Amount Paid :</p> <p className='text-black'> {item.amount} </p></div>


                                    <div className='flex flex-row p-1 justify-between'><p className='font-bold text-green-700'>Contact Guide : </p> <p className='text-black'>{item.gmail}</p></div>

                                    {/* <button
                                        className="mt-4 p-2 bg-red-500 hover:bg-green-700 text-white flex justify-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    // onClick={handleLogout}
                                    >
                                        <p> Pending</p>
                                    </button> */}
                                </div>
                            ))}
                        </div>
                    </div>
            </div>

        </div>
        </div>
    );
};

export default Profile;
