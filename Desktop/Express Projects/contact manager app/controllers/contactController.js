const asyncHandler = require("express-async-handler");

//@description Get All Contacts;
//@route GET api/contacts
//@Access Public

const getContacts = async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//@description Create New Contact;
//@route POST api/contacts
//@Access Public

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are Mandatory!");
  }
  console.log("The Request Body is:", req.body);
  res.status(201).json({ message: "Created contact" });
});

//@description Get Contact;
//@route GET api/contacts/:id
//@Access Public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@description Update Contact;
//@route PUT api/contacts/:id
//@Access Public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@description Delete Contact;
//@route DELETE api/contacts/:id
//@Access Public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
