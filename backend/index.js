import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import user from "./model/users.js"
import Product from "./model/products.js";
import Complaint from "./model/complaints.js"
import FactoryOrchestrator from "../factories/FactoryOrchestrator.js";
const app = express();
dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


const PORT = 5001;

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const handleServerStartup = () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}
await mongoose.connect(process.env.CONNECTION_URL, mongooseOptions, handleServerStartup)

var newuser = new user({type:"CUSTOMER",email:"omar@gmail",name:"omar"})
newuser.save()
const groceryFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const newProduct = groceryFactory.createProduct("MEAT");
console.log(newProduct)
Product.insertMany(newProduct)

app.post("/", (req,res)=>{

    console.log(req.body)
    res.send(200);
});
app.post("/complain", (req,res)=>{

    console.log(req.body)
    res.send(200);
});

