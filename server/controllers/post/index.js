const Post = require('../../models/Post');
const add = async (req, res) => {

    let body = req.body;
    console.log(body);
    try {
        let post = Post(body);
        await post.save();
        // res.json(200,result);
        console.log(post);
        res.send(post);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
// app.get("/products", async (req, res) => {
//     let products = await Product.find();
//     if (products.length > 0) {
//       res.send(products)
//     }
//     else {
//       res.send("No data found")
//     }
//   })
const getdata = async (req, res) => {
    try {
        let postData = await Post.find();
        console.log(req.user)
        // console.log(postData)
        if (postData.length > 0) {
            res.send(postData)
        }
        else {
            res.send("No data found")
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const postUpdate = async (req, res) => {
    console.log(req.body);
    console.log(req.user);
    let role = req.user.role;
    // console.log(user.role);
    let { title, description, status, created, updated, userId } = req.body;
    let id = req.params.id;
    let data = {
        title,
        description,
        status,
        created,
        updated,
        userId
    }
    console.log(data);
    try {
        if (role === 'admin') {
            let updatePost = await Post.updateOne(
                { _id: id },
                { $set: data }
            )
            res.send(updatePost)
        }
        else {
            res.send("Access Denied");
        }
    }

    catch (error) {
        res.send(error);
    }

}
const postDelete = async (req, res) => {
    const role = req.user.role;
    console.log(role);
    try {
        if(role=="admin"){
        console.log(req.body);
        let id = req.params.id;
        let result = await Post.deleteOne(
            { _id: id }
        )
        res.send(result);
    }
else{
    res.json('Access Denied');
}}
    catch (error) {
        res.send(error);
    }
}



module.exports = {
    add, getdata, postUpdate, postDelete
};