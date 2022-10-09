import mongoose from "mongoose";

const {Schema} = mongoose;

const angebotSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
});

const Offer = mongoose.models.Offer || mongoose.model("Offer", angebotSchema);

export default Offer;