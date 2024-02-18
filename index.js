const express = require('express')
const userRouter = require("./routes/user")

const app = express()
const PORT = 3000;

app.use(express.json());
app.use('/user' , userRouter)
app.use('/DataDb' ,express.static("./DataDb") )

app.get('/' , (req , res) => {
    res.send('Home Page');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
