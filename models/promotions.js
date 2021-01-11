const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

const promotionsSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: true,
    },
    price: {
        type: Currency,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },

}, {
    
    timestamps: true
    
});

module.exports = promotionsSchema;