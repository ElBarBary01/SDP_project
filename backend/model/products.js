import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    ssid: { type: String },
    type: { type: String, enum: ['SUMMER_OUTFIT', 'WINTER_OUTFIT', 'HAND_TOOLS', 'POWER_TOOLS', 'GORCERY'] },
    name: { type: String },
    price: { type: Number }
}
);
const Product = mongoose.model('Product', productSchema,'Products');
export default Product;