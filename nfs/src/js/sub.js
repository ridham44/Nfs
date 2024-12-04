const mongoose = require('mongoose');
const subscriberSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true, 
      trim: true // Trims extra spaces
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, // Converts email to lowercase
      match: [/.+@.+\..+/, 'Invalid email address'] 
    },
  }, { timestamps: true }); 
  
  module.exports = mongoose.model('Subscriber', subscriberSchema)