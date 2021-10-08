import express from 'express';
import data from './data';

const app = express();
const port = 5000;

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