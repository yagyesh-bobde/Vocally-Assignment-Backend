import mongoose from "mongoose";

const DB_URI = "mongodb+srv://developerszone:developerszone@developers-zone.llw0kbk.mongodb.net/test";

const connectDatabase = () => {
    mongoose.connect(DB_URI , () => {
        console.log("Connected to the database")
    })
}

export default connectDatabase;

