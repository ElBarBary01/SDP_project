import express from 'express'
import user from "./model/users.js"
import Product from "./model/products.js";
import Complaint from "./model/complaints.js"

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
router.post("/porduct", async (req, res) => {
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
router.patch("/rewview", async (req, res) => {
    try {

        var{ssid,comment,score}=req.body

        var review = await Product.findOneAndUpdate({ ssid: ssid }, { review:{score,comment } }, { new: true });
        res.json(review);
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
