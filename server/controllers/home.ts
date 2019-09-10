import { Request, Response } from "express";

import User from '../models/user';
/* GET home page. */
export let index = (req: Request, res: Response) => {
    let languages = [
        {
            language: 'United States'
        },
        {
            language: "French"
        },
        {
            langauge: "Germany"
        }
    ];
    res.json(languages);
};

export let users = (req: Request, res: Response) => {

    let users = [
        new User('James Coonce', 'jcoonce', 'james@none.com'),
        new User('Jim Coonce', 'jimcoonce', 'jim@none.com'),
        new User('Norman', 'jcoonce', 'norman@none.com'),
    ];
    res.set("Access-Control-Allow-Origin", '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    res.send(users);
};

export let create = (req: Request, res: Response) => {
    let user = new User(req.body.name, req.body.username, req.body.email);
    res.json(user);
};