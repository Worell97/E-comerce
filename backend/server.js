import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';


dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const port = 5000;
app.use(express.json());
app.use("/api/users", userRoute);

app.get("/api/products", (req, res) => {
    res.send(data.products);
});


app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const productDetails = data.products.find(x => x._id === productId);
    if (productDetails){
        res.send(productDetails);
    }else{
        res.status(404).send({msg: "Product not found."});
    }
});

app.listen(port, () => { console.log("Server started at http://localhost:5000") });