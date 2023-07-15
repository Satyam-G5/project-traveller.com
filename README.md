![Screenshot 2023-07-15 191735](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/52ace3ff-9c02-4474-bedf-ebe595907f36)

# Traveller

Traveller is a state tourism website that offers comprehensive travel services, including guide services and hotel bookings. It provides an interactive platform for users to explore different states, plan their trips, and make secure payments through the integrated Razorpay payment system.

![Screenshot 2023-07-13 112023](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/6cbde879-64b0-4d5f-8208-16c3bd62ad7c)

# Plan Your State Tourism - 

![Screenshot 2023-07-15 171738](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/19b2c9a7-65d0-4630-9afe-f05cd119c487)

![Screenshot 2023-07-15 171844](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/1154cb02-696b-435c-b543-7b3455e9c1ba)


## Features


- Browse and select state tourism packages
- View detailed information about each state, including popular tourist destinations and activities
- Book guides for personalized travel experiences
- Search and book hotels in various locations
- Integrated Razorpay payment system for secure and convenient online transactions
- Password Hashing with JWT Token: User passwords are securely hashed using JWT (JSON Web Token) technology, ensuring that sensitive information is protected.

![Screenshot 2023-07-15 172056](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/2be341f2-20a0-4703-ab47-6f0eb3fb90bf)

![Screenshot 2023-07-15 172013](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/66f9bf65-d7a3-4466-a10c-94e3a826ef5c)

## Technologies Used

- **MERN Stack (MongoDB, Express.js, React, Node.js):** The project is built using the MERN stack, which combines MongoDB as the database, Express.js as the backend framework, React for the frontend, and Node.js for server-side scripting. This powerful combination allows for efficient development, scalability, and real-time data handling.

- **Tailwind CSS:** The website's UI is designed using Tailwind CSS, a utility-first CSS framework. Tailwind CSS provides a set of pre-designed utility classes that make it easy to create responsive and visually appealing user interfaces.

- **JavaScript:** The project utilizes JavaScript as the primary programming language for both frontend and backend development. JavaScript provides the necessary functionality for interactivity, data manipulation, and asynchronous operations.

- **Razorpay API:** The website integrates the Razorpay payment system using the Razorpay API. Razorpay is a popular payment gateway in India, providing secure and reliable payment processing for online transactions.

![Screenshot 2023-07-15 173210](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/bf10b476-1968-4872-8f6f-7c235befba16)

![Screenshot 2023-07-15 173125](https://github.com/Satyam-G5/project-traveller.com/assets/126576749/174dda89-97f3-4458-8199-52f49fbf6736)


## Installation
1. Clone the repository: `git clone https://github.com/your-username/traveller.git`
2. Navigate to the project directory: `cd traveller`
3. Install the dependencies: `npm install`


# Set up environment variables:

   - Create a `.env` file in the root directory
   - Define the following variables in the `.env` file:
     ```
     company_SECRET_KEY = "companysidesecreatkeyknownonlytome" 

     PORT = 8000
     
     RAZOR_Pay_KEY_ID = 'rzp_test_SzELy6av5lQSyI'
     RAZOR_Pay_SECRET_KEY = 'qsXKVIwtYwuJOeRIUKyWXSow'


   user_SECRET_KEY = "justsomesercetknowntonooneexceptme"
   
     ```
     
6. Start the frontend server: `cd frontend `
                                 `npm run dev`
7. Start the backend server :`cd backend `
                                 `nodemon server.js`
   
8. Open your browser and visit: `http://localhost:5173`


## Contributing

Contributions are welcome! If you'd like to contribute to Traveller, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

Please make sure to follow the [code of conduct](CODE_OF_CONDUCT.md) while contributing.

## License

This project is licensed under the [MIT License](LICENSE).
