import { Request, Response } from 'express';

const superSecureResource = ( req: Request, res: Response ) => {
    console.log('TEST')
    res
    .status(401)
    .json({message: "You need to be logged in to see this..."});
};

module.exports = { 
    superSecureResource
};

