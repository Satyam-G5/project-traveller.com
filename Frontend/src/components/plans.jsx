import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import Alert from '../components/alert';



const plans = () => {

  const { newuser, states, guide, hotel ,date } = useContext(AuthContext);
  const [amt, setAmt] = useState(0);
  const [travel, setTravel] = useState({
    stateName: "",
    HotelName: "",
    guideName: "",
    userName: "",
    amount: "",
    hotelLocation: "",
    singleRoom: "",
    doubleRoom: "",
    email: "",
    gmail: "",
    jdate : ""
  })

  const add_guide = (event) => {
    const isChecked = event.target.checked;
    const guide_amt = 5000;
    setAmt(prevAmt => isChecked ? prevAmt + guide_amt : prevAmt - guide_amt);
    console.log(amt);
  };

  const single = hotel.s_price;
  const double = hotel.d_price;

  const add_single_room = (event) => {
    const isChecked = event.target.checked;

    setAmt(prevAmt => isChecked ? prevAmt + single : prevAmt - single);
    console.log(amt);
  };

  const add_double_room = (event) => {
    const isChecked = event.target.checked;

    setAmt(prevAmt => isChecked ? prevAmt + double : prevAmt - double);
    console.log(amt);
  };

  const save_travel = async () => {
    setTravel({
      stateName: states,
      HotelName: hotel.h_name,
      guideName: guide.g_name,
      userName: newuser.Name,
      amount: amt,
      hotelLocation: hotel.location,
      singleRoom: single,
      doubleRoom: double,
      email: newuser.email,
      gmail: guide.gmail,
      jdate : date
    })

    try {
      const {
        stateName,
        HotelName,
        guideName,
        userName,
        amount,
        hotelLocation,
        singleRoom,
        doubleRoom,
        email,
        gmail,
        jdate
      } = travel;
      const response = await fetch('/SetTraveldata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        stateName,
        HotelName,
        guideName,
        userName,
        amount,
        hotelLocation,
        singleRoom,
        doubleRoom,
        email,
        gmail,
        jdate
        }),
      });

      if (response.ok) {
        console.log('Travel Details saved to Collection');

      } else {
        console.log('Travel Data not saved');
      }
    } catch (error) {
      console.log(error);
    }
  }



  const handle_payment = async () => {

    try {
      save_travel() ;
      const amount = amt;
      const data = await fetch('/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
        }),
      });

      if (data) {
        const result = await data.json();
        console.log(result);
        const { success, order } = result;
        const options = {
          key: 'rzp_test_SzELy6av5lQSyI', // Enter the Key ID generated from the Dashboard
          amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: 'INR',
          name: 'Traveller.com',
          description: 'Test Transaction',
          image: 'https://example.com/your_logo',
          order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: '/paymentDetails',
          prefill: {
            name: 'Gaurav Kumar',
            email: 'gaurav.kumar@example.com',
            contact: '9000090000',
          },
          notes: {
            address: 'Razorpay Corporate Office',
          },
          theme: {
            color: '#3399cc',
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();

      } else {
        console.log('Failed to receive data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">So {states} it is !! Way to goo !!!</h2>
          <h2 className="text-xl p-2 tracking-tight text-gray-900 sm:text-xl">Journey Date: {date} </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Here's your final selection , choose hotels and guide which will you journey even more entertaining </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Choose Hotels and Guides </h3>


            <p className="mt-6 text-base leading-7 text-gray-600">Travelling expenses are included when opting for guide select from <Link className="text-green-700 hover:text-green-900 font-bold" to="/guides">AVAILABLE GUIDES</Link> Guide Services costs INR 5000 </p>

            {guide.g_name && <Alert type="success" message={`${guide.g_name} is selected as your personal guide`} />}

            <li className="mt-6 flex gap-x-3">

              <input id="default-checkbox" onClick={add_guide} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select guide (for your location )</label>

            </li>
            <p className="mt-6 text-base leading-7 text-gray-600">Your base price is zero , Cost of guide is 2000 Rs each and all the hotels prices can be checked by visiting <Link className="text-green-700 hover:text-green-900 font-bold" to="/hotels">AVAILABLE HOTELS</Link> </p>

            {hotel.h_name && <Alert type="success" message={`Hotel ${hotel.h_name} is selected for your stay `} />}

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Hotels - Select rooms</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <input id="default-checkbox" onClick={add_single_room} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Single Room (Price : {single} / day)</label>
              </li>

              {/* <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                No. of Rooms
              </li> */}

              <li className="flex gap-x-3">
                <input id="default-checkbox" type="checkbox" onClick={add_double_room} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Double Room (Price : {double} / day)</label>
              </li>

              {/* <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                No. of Rooms
              </li> */}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once ready </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{amt}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">INR</span>
                </p>
                <a className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 hover:cursor-pointer focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handle_payment}>Make Payment</a>
                <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default plans
