import mongoose from 'mongoose';

// Create an information
const infoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    additionalDescription: {
        type: String,
        required: false,
    },

}, { timestamps: true });

const Info = mongoose.model('Info', infoSchema);

export default Info;