import contactSchema from "./contact.validation.js";
import createContact from "./contact.service.js";

const createContactController = async (req, res) => {
  console.log("CONTACT CONTROLLER HIT");
  try {
    const contactData = req.body;
    console.log("CONTACT DATA:", contactData);
    const { error } = contactSchema.validate(contactData);
    console.log("VALIDATION RESULT:", error);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    console.log("VALIDATION PASSED");
    const conatc = await createContact(contactData);
    return res.status(201).json({
      success: true,
      message: "contact message send successfully",
      data: conatc,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default createContactController;
