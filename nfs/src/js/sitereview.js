const mongoose = require("mongoose");

const siteReviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    review: { type: String, required: true },
});

const SiteReview = mongoose.model("SiteReview", siteReviewSchema);

module.exports = SiteReview;
