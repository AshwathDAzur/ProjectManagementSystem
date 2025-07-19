import Express  from "express";

const app = Express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(2025, () => {
    console.log("Server is running on http://localhost:2025");
});