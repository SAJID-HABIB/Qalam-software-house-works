import express from "express";
import createContactController from "./contact.controller.js"
const router = express.Router();
router.post("/",createContactController);

export default router;