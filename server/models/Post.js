const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
   title:{
        type:String,
        required:[true,"Title is a required field"]
   },
   description:{
    type:String,
    required:[true,"Description is a requird field"]
   },
    status:{
            type: String,
            required: [true, "Status is a required field"],
    },
    created: {
        type: String,
        required: [true, "Created is a required field"],
    },
    updated:{
        type:String,
        required: [true, "Updated is a required field"],
    },
    userId:{
        type:String,
        required: [true, "UserId is a required field"],
    }
    
    
})

module.exports = mongoose.model("posts", postSchema);