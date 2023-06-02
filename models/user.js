import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // Add any additional fields you need for the user model
});

const User = mongoose.model('User', userSchema);

export default User;
