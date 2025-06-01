const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: {type: String, required: true}, // Generated filename for storage
    originalName: {type: String, required: true}, // Original filename from user
    path: {type: String, required: true},
    size: {type: Number, required: true},
    uuid: {type: String, required: true},
    sender: {type: String, required: false}, //false bcz it is required only when file is sent to someone file to email
    receiver: {type: String, required: false}
}, {timestamps: true});


module.exports = mongoose.model('File', fileSchema);