const Category = require('../../models/Category')

const add = async (req,res)=>{
    let {name,status,created,updated}= req.body;
    let data={
        name,
        status,
        created,
        updated
    }
    try{
        let category= Category(data);
        let result = await category.save();
        res.send(result);

    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

module.exports = {
    add
}