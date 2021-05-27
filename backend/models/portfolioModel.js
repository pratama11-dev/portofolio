import  mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
    {
        nama:{type: String, required: true, unique: true},
        desc:{type: String},
        link:{type: String},
        gambar:{type: String}
    },
);

const Portfolio = mongoose.model('Portfolio',portfolioSchema)

export default Portfolio;