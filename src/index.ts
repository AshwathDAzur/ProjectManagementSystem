import express, {Express, Response, Request}  from "express";

const app:Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(2025, () => {
    console.log("Server is running on http://localhost:2025");
});