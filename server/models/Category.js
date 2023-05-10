const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
            type:String,
            required:[true,"Name is a required field"]
    },
    status:{
            type: String,
            required: [true, "Status is a required field"],
    },
    created: {
        type: String
    },
    updated:{
        type:String
    }
    
    
})

module.exports = mongoose.model("category", categorySchema);