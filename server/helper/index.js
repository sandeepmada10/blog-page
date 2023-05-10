const jwt = require('jsonwebtoken');
const ACCESS_TOKEN="guasljbislgfdiublsdibgdsb";
// const {login}= require('../controllers/auth/index')

const createToken = (email)=>{
    
    const token = jwt.sign(email,ACCESS_TOKEN);
    return token;
 
}


const verifyToken = (req,res,next) =>{
    try{
    let token = req.header('auth-token');
    if(token){
        const verified= jwt.verify(token,ACCESS_TOKEN);
        console.log('verify data')
        console.log(verified);
        req.user = verified;
        next();
    }
else{
    res.send('Token is required');
}}
    catch(error){
        res.send("Access Denied")
    }

}
module.exports = {createToken,verifyToken};