import Contact from "./contact.model.js"
import {sendContactEmail} from "../../services/email.service.js"
import contactSchema from "./contact.validation.js";

const createContact = async (contactData)  => {
    const contact = await Contact.create(contactData);
    await sendContactEmail(contactData);
    return contact;

}

const getContactService = async () => {
    const contact = await Contact.find().sort({
        createdAt: -1,

    })
    return contact;
}

export {
    createContact,
     getContactService
    };
