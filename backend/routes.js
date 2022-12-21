import express from 'express'
import Product from "./model/products.js";
import Complaint from "./model/complaints.js"
import User from './model/users.js';

const router = express.Router()
//landing page gets all products
router.get("/products", async (req, res) => {
    try {
        const records = await Product.find();
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
router.get("/products/:ssid", async (req, res) => {
    try {
        var ssid = req.params.ssid
        const records = await Product.find({ssid:ssid});
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
router.get("/products/seller/:email", async (req, res) => {
    try {
        var email = req.params.email
        const records = await Product.find({seller:email});
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//landing page for customer-service gets all complaints 
router.get("/complaints", async (req, res) => {
    try {
        const records = await Complaint.find();
        res.status(200).json(records);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//method used for product seller to create new project
router.post("/product", async (req, res) => {
    try {
        var product = req.body
        await Product.insertMany(product)
        res.json(product)
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//complaint sending for customers
router.post("/complain", async (req, res) => {
    try {
        var complaint = req.body
        await Complaint.insertMany(complaint)
        res.json(complaint)
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//reviewing products by users
router.patch("/review", async (req, res) => {
    try {

        var{ssid,comment,score}=req.body

        var review = await Product.findOneAndUpdate({ ssid: ssid }, { review:{score,comment } }, { new: true });
        res.json(review);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
router.patch("/products", async (req, res) => {
    try {

        var{ssid,price,name,image}=req.body
        var product = await Product.findOneAndUpdate({ ssid: ssid }, {$set: req.body,} ,{ new: true });
        res.json(product);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
router.patch("/buy", async (req, res) => {
    try {

        var{ssid}=req.body
        var product = await Product.findOneAndUpdate({ ssid: ssid }, {$inc:{ quantitysold : 1}} ,{ new: true });
        res.json(product);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
//reply to complaint by customer service
router.patch("/complain", async (req, res) => {
    try {
        var { response, email } = req.body
        var complaint = await Complaint.findByIdAndUpdate({ email: email }, { response: response }, { new: true })
        res.json(complaint)
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }

});
//removing a product by seller
router.delete("/:ssid", async (req, res) => {
    try {
        var ssid = req.params
        var product = await Product.findOneAndDelete({ ssid: ssid });
        res.json(product);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }

})
router.patch("/users", async (req, res) => {
    try {

        var{email,purchase}=req.body
        var user = await User.findOneAndUpdate({ email:email }, {$push:{history:{purchase}}} ,{ new: true });
        res.json(user);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});

export default router;