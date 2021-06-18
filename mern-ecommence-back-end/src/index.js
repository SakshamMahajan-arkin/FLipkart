//29:48
const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin/auth');
const cartRoutes = require('./routes/cart');
const cors = require('cors');
env.config();

//Mongodb connection
const dbURL=`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.u33li.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(
    dbURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
).then(()=>{
    console.log("Database Connected");
})

app.use(cors());
app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Running on port 9000");
});