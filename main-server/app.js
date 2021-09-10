const express = require('express')
const bodyParser = require("body-parser")
const sequelize = require('./config/db')
const cors = require('cors')
const app = express()
const path = require("path");

//Models
const Form = require("./models/form");
const Cart = require("./models/cartform");
const User = require('./models/user')

//Routers
const userRouter = require('./routes/user')
const authRouter = require("./routes/auth");
//const formRouter = require('./routes/form')
const cartformRouter = require('./routes/cartform')

//Middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())

app.use(express.static(__dirname + "./uploads"));
app.use("/uploads", express.static("./uploads"));


app.use('/api/user', userRouter)
app.use("/api/auth", authRouter);
//app.use('/api/product', formRouter)
app.use("/api/cartform", cartformRouter);


const port = process.env.PORT || 5000 ;

//Connect Database
(async () =>{
    await sequelize.sync({ alter: true });
    //await sequelize.sync()
    app.listen( port, () => 
    console.log(`Server Running on port ...${port}`)
    )
})()


// User.hasOne(Cart);
// Cart.belongsTo(User);

// Category.hasMany(SubCategory);
// SubCategory.belongsTo(Category);

// SubCategory.hasMany(Product);
// Product.belongsTo(SubCategory);






