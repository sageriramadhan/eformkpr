const express = require('express')
const bodyParser = require("body-parser")
const sequelize = require('./config/db')
const cors = require('cors')
const app = express()
const path = require("path");

//Models
const Form = require("./models/form");
// const Cart = require("./models/cartform");
const User = require('./models/user')

//Routers
const userRouter = require('./routes/user')
const authRouter = require("./routes/auth");
const formRouter = require('./routes/form')
const uploadRouter = require('./routes/uploaddocs')

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.use(express.static(__dirname));


app.use('/api/user', userRouter)
app.use("/api/auth", authRouter);
app.use('/api/form', formRouter)
app.use("/api/upload", uploadRouter);


const port = process.env.PORT || 5000 ;

//Connect Database
(async () =>{
    await sequelize.sync({alter: true });
    //await sequelize.sync()
    app.listen( port, () => 
    console.log(`Server Running on port ...${port}`)
    )
})()








