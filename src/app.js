

const express = require("express");

const app = express();





app.use("/test", (req, res) => {
    res.send("listing port 5010 server")
})
app.use("/", (req, res) => {
    res.send("Hii Sarmista");
})
app.listen(5010, () => {
    console.log("Server is Successfully listening on port 5010...");
})

