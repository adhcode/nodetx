import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send(`<div><h1>This is home<h1></div>`);
});
app.get("/user", (req, res) => {
    res.send(`<div><h1>This is User route<h1></div>`);
});
app.get("/user/:id", (req, res) => {
    res.send(`<div><h1>This is User route ID<h1></div>`);
});
app.listen(3000, () => {
    console.log("listening on port 3000");
});
//# sourceMappingURL=app.js.map