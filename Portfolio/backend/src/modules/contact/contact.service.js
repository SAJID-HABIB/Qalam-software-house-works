import Contact from "./contact.model.js"

const createContact = async (contactData)  => {
    const contact = await Contact.create(contactData);
    return contact;

}

export default createContact;
