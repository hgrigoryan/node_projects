const jwt = require("jsonwebtoken");
const {UnauthorizedError} = require("../utils/HttpError");

function verifyJWT(req, res, next){
    try{
        const token = req.cookies.AccessToken;
        // Check if token is sent
        if(!token){
            throw new UnauthorizedError;
        }

        // Check if token is valid
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userName) => {
            if(err){
                throw new UnauthorizedError;
            }else{
                req.userName = userName;
            }

        }); 

        next();
    }catch(err){
        const statusCode = "500";
        const message = "Internal server 1error."
        if(err instanceof UnauthorizedError){
            statusCode = err.statusCode;
            message = err.message;
        }
        res.status(statusCode).json({
            error: message
        });
    }
}

module.exports = verifyJWT;