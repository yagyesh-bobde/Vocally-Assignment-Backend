import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/Vocally";

const connectDatabase = () => {
    mongoose.connect(DB_URI , () => {
        console.log("Connected to the database")
    })
}

export default connectDatabase;

