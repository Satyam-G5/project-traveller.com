import React, { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [newuser, setNewuser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedin, setLoggedin] = useState(false);
    const [states , setStates] = useState("Location");
    const [guide , setGuide] = useState (null)
    const [hotel , setHotel] = useState ({
        h_name : null ,
        s_price : null ,
        d_price : null
    })

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

    const book_guide = (guide_details) => {
        setGuide(guide_details)
    }

    const book_hotel = (hName , Sprice , Dprice) => {
        setHotel({
            h_name : hName ,
            s_price : Sprice , 
            d_price : Dprice
        })
    }

    const finalLocation = (setlocation) => {
        setStates(setlocation)
    }

    return (
        <AuthContext.Provider value={{ token, newuser, loggedin,states, guide ,hotel , book_hotel, finalLocation , login, logout , book_guide }}>
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
