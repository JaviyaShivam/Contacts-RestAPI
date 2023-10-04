const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc get all contects
// @routw GET /api/contacts
// @access Public
const getContacts = asyncHandler(async (req, res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


// @desc create contect
// @route POST /api/contacts
// @access Public
const createContacts = asyncHandler(async (req, res)=>{
    console.log(req.body);
    const {name, email, mobile} = req.body;
    if(!name || !email || !mobile){
        res.statusCode(400);
        throw new Error('All Fields are Mendetory');
    }
    const contacts = await Contact.create({
        name,
        email,
        mobile,
    })
    res.statusCode(200).json(contacts);
});

// @desc get contect
// @rout GET /api/contacts/:id
// @access Public
const getContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.statusCode(404);
        throw new Error("Contact not found");
    }
    res.statusCode(200).json(contact);
});

// @desc update contect
// @route PUT /api/contacts/:id
// @access Public

const updateContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.statusCode(404);
        throw new Error("Contact Not Found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
    );
    res.statusCode(200).json(updatedContact);
});
// @desc Delete contect
// @route delete /api/contacts/:id
// @access Public
const deleteContact = asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.statusCode(404);
        throw new Error("Contact Not Found");
    }
    await contact.remove();
    res.statusCode(200).json(contact);
});

module.exports = {
    getContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact,
}
