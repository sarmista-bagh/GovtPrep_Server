




-initialize git 
-.gitignore
-Create a remote repo on github
-Push all code to remote origin




const express = require("express");

const app = express();



//This will only handle GET Request  call to /user
app.get("/user", (req, res) => {
    res.send({ firstName: "Sarmista" })

// })
// app.post("/user", (req, res) => {
//     //saving data in db
//     res.send("Data Successfull saved  to the database")
// })
// app.delete("/user", (req, res) => {
//     res.send("Data deleted syccessfully...")
// })

// //This will match all the HTTP method PAI calls to /test like GET,POST,PATCH,DELETE 
// app.use("/test", (req, res) => {
//     //If u use app.use it will handle any type methods whether it is a get  or post or patch or delete request this handle any type request
//     res.send("listing port 5010 server") //if u not send response it will be infinite 
// })
// app.use("/", (req, res) => {
//     res.send("Hii Sarmista");
// })
app.listen(5010, () => {
    console.log("Server is Successfully listening on port 5010...");
})








const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
    console.log("Handling route1")
   // res.send("Response 1")
    next()

}, [(req, res,next) => {
    console.log("Handling the route2");
   // res.send("Response 2 !! ")
    next()
},(req,res,next)=>{
    console.log("Handling the route3");
    //res.send("Response 3")
    next()
}],(req,res,next)=>{
     console.log("Handling the route 4");
    res.send("Response 4")
    
})




app.listen(5010, () => {
    console.log("Server is Successfully listening on port 5010...");
})

