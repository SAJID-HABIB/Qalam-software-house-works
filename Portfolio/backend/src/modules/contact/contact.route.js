import express from "express";
import {createContactController, getContactController} from "./contact.controller.js";
const router = express.Router();
router.post("/",createContactController);
router.get("/",getContactController)

export default router;