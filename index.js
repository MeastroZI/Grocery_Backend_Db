const express = require('express')
require('dotenv').config();
const userRouter = require("./routes/user")
const gcRouter = require("./routes/grocery")


const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/user' , userRouter)
app.use('/gc' ,gcRouter )

app.use('/DataDb' ,express.static("./DataDb") )
// app.use('/')


app.get('/' , (req , res) => {
    res.send('Home Page');
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

