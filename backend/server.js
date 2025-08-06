import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();
// Connect to Cloudinary
connectCloudinary();

// middleware 
app.use(express.json())
app.use(cors())

// api endpoints 
app.use('/api/user', userRouter)
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
// api endpoints 
app.get('/', (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

