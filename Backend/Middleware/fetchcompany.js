
const jwt = require("jsonwebtoken");

const jwt_secretkey = "companysidesecreatkeyknownonlytome"  // JWT secret key for token generation (Company side )

fetchcompany = (req, res, next) => {

    // to get the user id from  the JWT token 

    const token = req.header("jwt_token")
    if (!token) {
        res.status(401).json({ error: "Authentication error no token " });
    }
    try {
        const data = jwt.verify(token, jwt_secretkey)
        req.companyschema = data.companyschema
        console.log(" From fetchcompany middleware", data.companyschema);
        next();

    } catch (error) {
        res.status(401).json({ error: "Authentication error token not matched " });
    }


}

module.exports = fetchcompany;





/* 
    {
  "airlineName" : "Air India",
  "Owner" : "Tata Sons",
  "email" : "tataindia@gamail.com",
  "password" :"bestairline"
}
token generated is --- (create user auth token )

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55c2NoZW1hIjp7ImlkIjoiNjQ3YzJmMGIyZjZiYThiMGEzY2JjYWY4In0sImlhdCI6MTY4NTg2MDEwN30.-at3PDEnc0z8U4cL2yDxGs5VEf0kLeY-TZLaogQAYMw"


token generated during login --

{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55c2NoZW1hIjp7ImlkIjoiNjQ3YzJmMGIyZjZiYThiMGEzY2JjYWY4In0sImlhdCI6MTY4NTg2MTUxMn0.DiJsSRH4JHNh3pU1G_oznRB5fxCIk9ABlaDRIsGVFJY"
}

*/


