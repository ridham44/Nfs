const mongoose = require('mongoose');

const f1ReviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    review: { type: String, required: true },
    team: { type: String, required: true },
}, { timestamps: true });

const F1Review = mongoose.model('F1Review', f1ReviewSchema);

module.exports = F1Review;
