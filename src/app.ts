import express, {Request, Response } from "express";

const app = express ();


interface user {
    id: number,
    name: string,
    age: number
}



app.get("/", (req: Request, res: Response ) => {
    res.send(`<div><h1>This is home<h1></div>`);
}

);

app.get("/user", (req: Request, res: Response ) => {
    res.send(`<div><h1>This is User route<h1></div>`);
}

);

app.get("/user/:id", (req: Request, res: Response ) => {
    res.send(`<div><h1>This is User route ID<h1></div>`);
}

);


app.listen(3000, () => {
    console.log("listening on port 3000");
})







