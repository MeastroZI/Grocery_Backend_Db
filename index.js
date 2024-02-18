const express = require('express');
const app = express();
const userRouter = require('./routes/user');

const PORT = 3000;

app.use('/user' , userRouter);

app.get('/' , (req , res) => {
    res.send('Home Page');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
