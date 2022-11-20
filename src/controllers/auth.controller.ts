import { Request, Response } from 'express';
const jsonwebtoken = require("jsonwebtoken");

const login = ( req: Request, res: Response ) => {
    const { username, password } = req.body;
    console.log(`${username} is trying to login ..`);

    if (username === "admin" && password === "admin") {
        return res.json({
        token: jsonwebtoken.sign({ user: "admin" }, process.env.JWT_SECRET),
        });
    }
    res
    .status(401)
    .json({message: "Username and/or password are incorrect"});
};

const superSecureResource = ( req: Request, res: Response ) => {
    res
    .status(401)
    .json({message: "You need to be logged in to see this..."});
};

module.exports = { 
    login,
    superSecureResource
};

