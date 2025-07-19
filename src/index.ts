import express, {Express, Response, Request}  from "express";
import { PORT } from "./secrets";

const app:Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});