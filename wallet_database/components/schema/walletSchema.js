const mongoose = require("mongoose")

const walletSchema = new mongoose.Schema({
    discordId: {
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    discordTag: mongoose.SchemaTypes.String,
    email: mongoose.SchemaTypes.String,
    address: mongoose.SchemaTypes.String,

})

module.exports = mongoose.model('Addresse', walletSchema);