import express from 'express'
import user from "./model/users.js"
import Product from "./model/products.js";
import Complaint from "./model/complaints.js"

const router = express.Router()

router.get("/products",async (req,res)=>{
    try {
        const records = await Product.find();
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
router.get("/complaints",async (req,res)=>{
    try {
        const records = await Complaint.find();
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

router.post("/porduct",async (req,res)=>{

    var product = req.body
    await Product.insertMany(product)
    res.json(product)
});
router.post("/complain",async (req,res)=>{
    var complaint = req.body
    await Complaint.insertMany(complaint)
    res.json(complaint)
});
