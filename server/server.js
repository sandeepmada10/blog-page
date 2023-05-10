
const express = require('express');
const app = express();
const cors = require('cors');
var morgan = require('morgan')
// const router = express.Router();
// const router1 = express.Router();
require("../server/db/config");
var bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'))
app.use(cors());

// var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync('123456', salt);
// console.log(hash);
// console.log(bcrypt.compareSync("123456", hash));

// const Post = require('../server/models/Post');
// const Router = require('../server/routes/index')
// const Post = require('../server/controllers/index')

const postRoute = require('./routes/post/index')
const categoryRoute = require('./routes/category/category')
// const userRoute = require('./routes/user/user')
const authRoute =require('./routes/auth/index');
// const Post = require('./models/Post');


// router.post('/post',Post.addPost)
// router1.get('/sampledata',Post.sample)
app.use('/api/post',postRoute);
app.use('/api/category',categoryRoute);
// app.use('/api/auth',userRoute)
app.use('/api/auth',authRoute);


// app.get("/api/post", async (req, res) => {
//     let postList = await Post.find();
//     if (postList.length > 0) {
//       res.send(postList)
//     }
//     else {
//       res.send("No data found")
//     }
//   })
// app.use(router);
// app.use(router1);

app.listen(4006, () => console.log('Server Started'))