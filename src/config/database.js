


const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sarmistabagh88_db_user:6nyc8L41QSsTM5XB@govtprepdb.hf8p8vx.mongodb.net/govtprep");
};

module.exports = connectDB;