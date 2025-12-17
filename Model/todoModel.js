//define ur model schema

import mongoose from "mongoose";

//TODO document structure
const todoSchema = mongoose.Schema(
    {
        todo:{
            type:String, 
            required:true, 
            unique:true
        }
    }
)

// We r creating collections with name called tools, with todoSchema
const todoCollection = mongoose.model("todos", todoSchema); // (Collection_name, Schema_name)

export default todoCollection;