import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [newuser, setNewuser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedin, setLoggedin] = useState(false);
    const [guide , setGuide] = useState (null)

    useEffect(() => {
        const getUserDetails = async () => {
            if (token) {
                try {
                    const response = await fetch("/getuser", {
                        method: 'GET',
                        headers: {
                            'content-type': 'application/json',
                            'accept': 'application/json',
                            'jwt_token': token.jwt_token
                            // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vyc2NoZW1hIjp7ImlkIjoiNjQ4YjdhYzA1YzUxNmYyOWM2YjRmNmJiIn0sImlhdCI6MTY4Njg3MjAxOH0.HAyCXQw913QshLWM1BhxTJCsGvuPxMDgZ1dMkXZfgeo"
                        },
                    });

                    if (response.ok) {
                        const userDetails = await response.json();
                        console.log(userDetails);
                        const { Name, age, email } = userDetails;

                        setNewuser({ ...userDetails, Name, age, email }); // Store the Name in newuser

                    } else {
                        console.log('Some error occurred');
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        getUserDetails();
    }, [token]);



    const login = (newToken) => {
        setToken(newToken);
        setLoading(true);
        setLoggedin(true);


    };

    const logout = () => {
        setToken(null);
        setNewuser(null);
        setLoggedin(false);
    };

    if (loading) {
        return <div>Loading...</div>; // or any loading indicator component
    }

    return (
        <AuthContext.Provider value={{ token, newuser, loggedin, guide , login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};





























// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = async ({ children }) => {
//     const [token, setToken] = useState(null);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const getUserDetails = async () => {
//             if (token) {
//                 try {
//                     const response = await fetch("/getuser", {
//                         method: 'GET',
//                         headers: {
//                             'content-type': 'application/json',
//                             'Accept': 'application/json',
//                             'jwt_token': token
//                         },
//                     });

//                     if (response.ok) {
//                         const userDetails = await response.json();
//                         setUser(userDetails.Name);
//                     } else {
//                         console.log('Some error occurred');
//                     }
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//         };

//         getUserDetails();
//     }, [token]);

//     const login = (newToken, newUser) => {
//         setToken(newToken);
//         setUser(newUser);
//     };

//     const logout = () => {
//         setToken(null);
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ token, user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
