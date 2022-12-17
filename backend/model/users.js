import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    type: { type: String, enum: ['SELLER', 'CUSTOMER', 'SERVICE'] },
    name: { type: String },
    email: { type: Number }
}
);
const user = mongoose.model('User', userSchema,'USERS');
export default user;