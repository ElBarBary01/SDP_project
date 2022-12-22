import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from "./routes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/api', router)


const PORT = 5001;

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const handleServerStartup = () => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}
await mongoose.connect(process.env.CONNECTION_URL, mongooseOptions, handleServerStartup)
/*
var newuser = new user({type:"CUSTOMER",email:"omar@gmail",name:"omar"})
newuser.save()
const groceryFactory = new FactoryOrchestrator().createFactory("GROCERIES")
const newProduct = groceryFactory.createProduct("MEAT");
console.log(newProduct)
Product.insertMany(newProduct)*/



