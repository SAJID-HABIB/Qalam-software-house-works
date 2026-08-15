import Joi from "joi";

const contactSchema = Joi.object({
  name: Joi.string()
  .trim()
  .min(3)
  .max(30)
  .required(),
  email: Joi.string()
  .trim()
  .required()
  .lowercase(),
  subject: Joi.string()
  .trim()
  .required()
  .min(3)
  .max(100),
  message: Joi.string()
  .trim()
  .required()
  .min(3)
  .max(1000),
  
})

export default contactSchema;