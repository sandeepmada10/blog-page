const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    email: {
        type: String,
        unique: [true, "Email id already used."],
        required: [true, "Email is a required field"],
        validate: {
            validator: async function(email) {
              const user = await this.constructor.findOne({ email });
              if(user) {
                if(this.id === user.id) {
                  return true;
                }
                return false;
              }
              return true;
            },
            message: props => 'The specified email address is already in use.'
          },
        
       
    },
    password: {
        type: String,
        required: [true, "Password is a required field"],
    },
    // status:{
    //         type: String,
            
    // },
    // created: {
    //     type: String
    // },
    // updated:{
    //     type:String
    // },
    role:{
        type: String,
        required: [true, "Role is a required field"]
        
    }
    
})

module.exports = mongoose.model("users", userSchema);