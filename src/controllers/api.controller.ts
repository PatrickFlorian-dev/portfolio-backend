import { Request, Response } from 'express';

const postTest = ( req: Request, res: Response ) => {
    res.json({message: "POST test api controller OK"});
};

const getTest = ( req: Request, res: Response ) => {
    res.json({message: "GET test api controller OK"});
};

const postTestWithParam = ( req: Request, res: Response ) => {
    console.log(req.params.testParam);
    res.json({message: "POST test api with param controller OK"});
};

const getTestWithParam = ( req: Request, res: Response ) => {
    console.log(req.params.testParam);
    res.json({message: "GET test api with param controller OK"});
};

module.exports = { 
    postTest, 
    getTest,
    postTestWithParam,
    getTestWithParam 
};

