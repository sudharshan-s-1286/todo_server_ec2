// We will handle connectivity between express and mongodb

// const mongoose = require('mongoose');  //commonjs
//or
import mongoose from "mongoose"; //module
import dotenv from "dotenv";

dotenv.config();

const connectDb = () => {
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");    
    } catch(err){
        console.error(err);
    }
}
export default connectDb;