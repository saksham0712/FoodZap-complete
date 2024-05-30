const express = require('express');
const Mongoose = require('mongoose');
const userRouter = require('./routes/userRotes');
const Router = require('./routes/restaurantRoutes');
const messRouter = require('./routes/messageRoutes');
const orderRouter = require('./routes/orderRoutes');
const dishRouter = require('./routes/dishRoutes');
const transactionRouter = require('./routes/transactionRoutes');
const groupRouter = require('./routes/groupRoutes');
const eventRoutes = require('./routes/eventRoutes');
const Routers = require('./routes/guestRoutes')
const port = 3001
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.send('hello weolcome chal nikal')
})
// user routes here 
app.use('/users', userRouter);
// rastaurants router 
app.use('/restaurants', Router);
// message router
app.use('/messages', messRouter);
app.use('/orders', orderRouter);
app.use('/dishs', dishRouter);
app.use('/transactions', transactionRouter);
app.use('/groups', groupRouter);
app.use('/events', eventRoutes);
app.use('/guests', Routers);

const db = Mongoose.connect('mongodb+srv://gunnibhai123:01eVIbqRkHlLTbfi@cluster0.tx106mf.mongodb.net/')
.then(console.log('the mongodb database is connected the dont take any tention'))
.catch((err)=> console.error(err))


app.listen(port, (req,res)=>{
    console.log(`app is running now and listening the port: ${port}`)
})