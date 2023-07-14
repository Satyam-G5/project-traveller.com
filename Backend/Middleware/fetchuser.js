const jwt = require("jsonwebtoken");

const jwt_secretkey = process.env.user_SECRET_KEY  // JWT secret key for token generation 
fetchuser = (req, res, next) => {

    // to get the user id from  the JWT token 

    const token = req.header("jwt_token")
    if (!token) {
        res.status(401).json({ error: "Authentication error " });
    }
    try {
        const data = jwt.verify(token, jwt_secretkey)
        req.userschema = data.userschema
        console.log(" From fetchuser middleware", data.userschema);
        next();

    } catch (error) {
        res.status(401).json({ error: "Authentication error " });
    }


}

module.exports = fetchuser;



















