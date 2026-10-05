const express = require("express");

const connectDB = require("./config/database");

const User = require("./models/user");

const app = express();

app.use(express.json());

// Creating a new instance of the User model
app.post("/signup", async (req, res) => {

    const user = new User(req.body);

    console.log(user);

    // Save the user into MongoDB
    try {
        await user.save();

        res.send("User Added Successfully...");
    } catch (err) {
        res.status(400).send("Error saving the user: " + err.message);
    }
});

// Connecting to MongoDB first,
// and only after a successful connection,
// starting the Express server.
connectDB()
    .then(() => {
        console.log("Database connection established...");

        app.listen(5010, () => {
            console.log("Server is listening on port 5010...");
        });
    })
    .catch((err) => {
        console.error("Database cannot be connected...", err);
    });