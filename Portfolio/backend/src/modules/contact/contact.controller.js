import contactSchema from "./contact.validation.js";
import {createContact, getContactService} from "./contact.service.js";

const createContactController = async (req, res) => {
  try {
    const contactData = req.body;
    const { error } = contactSchema.validate(contactData);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    const contact = await createContact(contactData);
    return res.status(201).json({
      success: true,
      message: "contact message send successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getContactController = async (req, res) => {
  try {
    const getContact = await getContactService();

    return res.status(200).json({
      success: true,
      message: "contacts get successfully",
      data: getContact
    })
  } catch (error) {
    return res.status(500).json({
     success: false,
     message: error.message,
    })
  };
}
 
export  {
  createContactController,
   getContactController
  };
