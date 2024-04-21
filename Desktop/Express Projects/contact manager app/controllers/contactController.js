//@description Get All Contacts;
//@route GET api/contacts
//@Access Public

const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//@description Create New Contact;
//@route POST api/contacts
//@Access Public

const createContact = (req, res) => {
  res.status(201).json({ message: "Create contact" });
};

//@description Get Contact;
//@route GET api/contacts/:id
//@Access Public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@description Update Contact;
//@route PUT api/contacts/:id
//@Access Public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@description Delete Contact;
//@route DELETE api/contacts/:id
//@Access Public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
