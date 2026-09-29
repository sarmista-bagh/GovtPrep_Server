

const express = require("express");

const app = express();



//This will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Sarmista" })

})
app.post("/user", (req, res) => {
    //saving data in db
    res.send("Data Successfull saved  to the database")
})
app.delete("/user", (req, res) => {
    res.send("Data deleted syccessfully...")
})

//This will match all the HTTP method PAI calls to /test
app.use("/test", (req, res) => {
    res.send("listing port 5010 server")
})
// app.use("/", (req, res) => {
//     res.send("Hii Sarmista");
// })
app.listen(5010, () => {
    console.log("Server is Successfully listening on port 5010...");
})

