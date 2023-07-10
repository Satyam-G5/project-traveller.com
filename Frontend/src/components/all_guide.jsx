import React, { useEffect, useState ,useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const all_guide = () => {

  const { book_guide , guide } = useContext(AuthContext);

    const [guidedetails, setGuidedetails] = useState([{
      _id : "" , 
      Name : "" , 
      age  : "" , 
      location  :  "" ,
      email : " "
    }])

   

    useEffect(() => {
        fetchdata();
    }, []
    )

    const fetchdata = async () => {
        try {
            const response = await fetch('/getcmp');
            console.log('Request sent');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            console.log(jsonData);
            // const { Name, age, location, email } = jsonData
            // setGuidedetails({ ...jsonData, Name, age, location, email });
            setGuidedetails(jsonData);
            console.log('Response received');
        } catch (error) {
            console.log('Error:', error.message);

        }
    };

    const book_my_guide = (guideName) => {
      book_guide(guideName);
      console.log(guideName);
    };

    return (
        <div>
        <div className="fixed top-20 left-0 w-full bg-blue-900 p-3 text-center z-10">
          <h1 className="text-white text-3xl">List of all the Guides working with Us</h1>
          <h3 className="text-white text-sm">Your experience our priority.</h3>
        </div>
        <div className="mt-24 p-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guidedetails.map((guide) => (
              <div
                key={guide._id}
                className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="flex justify-center">
                  <img
                    className="w-32 h-32 object-cover rounded-full mt-5"
                    src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                    alt="Profile"
                  />
                </div>
                <div className="text-center px-6 py-4">
                  <h2 className="text-xl font-bold text-black">Name: {guide.Name}</h2>
                  <p className="mt-2 text-sm text-black">Age: {guide.age}</p>
                  <p className="mt-2 text-sm text-black">Location: {guide.location}</p>
                  <p className="mt-2 text-sm text-black">Email: {guide.email}</p>
                  <Link to = "/plans">
                  <button className="mt-4 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={()=>book_my_guide(guide.Name)} 
                  >
                    Book
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default all_guide
