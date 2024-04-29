const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@description Get All Contacts;
//@route GET api/contacts
//@Access Private

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  // let lists = Object.entries(contacts);
  // console.log(typeof lists);
  // console.log(lists);
  res.status(200).json(contacts);
});

//@description Create New Contact;
//@route POST api/contacts
//@Access Private

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are Mandatory!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@description Get Contact;
//@route GET api/contacts/:id
//@Access Private

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  res.status(200).json(contact);
});

//@description Update Contact;
//@route PUT api/contacts/:id
//@Access Private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@description Delete Contact;
//@route DELETE api/contacts/:id
//@Access Private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  console.log(contact);
  await Contact.deleteOne();

  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
