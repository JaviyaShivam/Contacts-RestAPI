const express = require('express');
const router = express.Router();

const {
    getContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact,
} = require('../controllers/contectControllers');

// router.route('/').get(getContacts);
// router.route('/').post(createContacts);
// router.route('/:id').get(getContact);
// router.route('/:id').put(updateContact);
// router.route('/:id').delete(deleteContact);

router.route('/').get(getContacts).post(createContacts);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;