const User = require('../../models/User');
var bcrypt = require('bcryptjs');
const {createToken} = require('../../helper');
const { token } = require('morgan');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const ACCESS_TOKEN="guasljbislgfdiublsdibgdsb"
// const add = async (req,res) =>{
//     let body = req.body;
//     try{
//         let user = User(body);
//         let result = await user.save();
//         res.status(200).send(result);
//     }
//     catch(error){
//         res.status(400).send(error);
//     }
// }
const login = async (req, resp) => {
  let { email, password } = req.query;
  console.log(email, password)
  console.log(req.query)

  // if (!password && !email) {
  //   return resp.send({ result: "Email or Password is required" });
  // }

  let user = await User.findOne({ email });
  console.log(user);

// var salt = bcrypt.genSaltSync(10);
//     var hash = bcrypt.hashSync(`${req.body.password}`, salt);
//     console.log(hash)
  if (user) {
    console.log(user.password);
    let encryption = bcrypt.compareSync(password, user.password);
    console.log(encryption)
    if (!encryption) {
      return resp.send({ result: "Invalid User" });
    }
    let generatedToken = createToken({email:user.email,role:user.role});
    let data = {
      user,
      generatedToken
    }
    resp.send(data);
    // return generatedToken;
  } else {
    resp.send({ result: "No user found" });
  }
}

// const adminLogin = async (req,res)=>{
//   let { email } = req.body;
//   let user = await User.findOne({ email });
//   if(user){
//     let generatedToken = createToken(user.email);
//     let data = {
//       user,
//       generatedToken
//     }
//     res.header('auth-token',generatedToken).send(data);

//   }
//   else{
//     res.send("Access Denied");
//   }
      
// }




const signup = async (req, res) => {
  let { name, email, password,role } = req.body;
  if (!password && !email && !name) {
    return res.send({ result: "Email or Password is required" });
  }
  var salt = await bcrypt.genSaltSync(10);
  console.log(salt);
  var hash = await bcrypt.hashSync(password, salt);
  console.log(hash);
  let data = {
    name,
    email,
    password: hash,
    role
  }
  // let data={
  //   name,
  //   email,
  //   password,
  //   role
  // }
  console.log(data);
  try {
    let user = User(data);
    let result = await user.save();
    // if(email && password){
      res.status(200).send(result);
    // }
    
  }
  catch (error) {
    // if(email && password){
    res.status(400).send(error);
    // }
  }
}
module.exports = {
  login, 
  signup,
 
  // adminLogin
}