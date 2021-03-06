const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    members: {
        type: Array,
        required: true
    },
    name:{
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Group", GroupSchema)
