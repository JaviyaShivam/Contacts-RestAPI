const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add Contact Name'],
    },
    email:{
        type: String,
        required: [true, 'Please add Contact Email Address'],
    },
    mobile:{
        type: String,
        required: [true, 'Please add Contact Mobile Number'],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);