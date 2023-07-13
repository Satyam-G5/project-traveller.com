import React, { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [gtoken, setGtoken] = useState(null);
    const [newuser, setNewuser] = useState(null);
    const [newguide, setNewguide] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedin, setLoggedin] = useState(false);
    const [date , setDate] = useState(null);
    const [states , setStates] = useState("Location");
    const [guide , setGuide] = useState ({
        g_name : null ,
        gmail : null
    })
    const [hotel , setHotel] = useState ({
        h_name : null ,
        s_price : null ,
        d_price : null ,
        location : null
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


    useEffect(() => {
        const getguideDetails = async () => {
            if (gtoken) {
                try {
                    const response = await fetch("/getGuide", {
                        method: 'GET',
                        headers: {
                            'content-type': 'application/json',
                            'accept': 'application/json',
                            'jwt_token': gtoken.jwt_token

                        },
                    });

                    if (response.ok) {
                        const gDetails = await response.json();
                        console.log(gDetails);
                        const { Name, age, email } = gDetails;

                        setNewguide({ ...gDetails, Name, age, location, email }); 

                    
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

        getguideDetails();
    }, [gtoken]);




    const login = (newToken) => {
        setToken(newToken);
        setLoading(true);
        setLoggedin(true);

    }; 

       const glogin = (newToken) => {
        setGtoken(newToken);
        setLoading(true);
        setLoggedin(true);

    };

    const logout = () => {
        setToken(null);
        setNewuser(null);
        setGtoken(false);
        setLoggedin(false);
    };

    if (loading) {
        return <div>Loading...</div>; // or any loading indicator component
    }

    const book_guide = (guide_details , email) => {
        setGuide({
            g_name : guide_details ,
            gmail : email
            })
    }

    const book_hotel = (hName , Sprice , Dprice, locationcity) => {
        setHotel({
            h_name : hName ,
            s_price : Sprice , 
            d_price : Dprice , 
            location : locationcity
        })
    }

    const finalLocation = (setlocation) => {
        setStates(setlocation)
    }

    const addDate = (dateData) => {
        setDate(dateData)
    }

    return (
        <AuthContext.Provider value={{ token, newuser, date , newguide , loggedin,states, guide ,hotel , addDate ,glogin, book_hotel, finalLocation , login, logout , book_guide }}>
            {children}
        </AuthContext.Provider>
    );
};


