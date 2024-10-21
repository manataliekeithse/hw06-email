import express from "express";
import {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
} from "../../controllers/contactsController.js";
import { authenticateToken } from "../../middlewares/auth.js";

const router = express.Router();

router.get("/", authenticateToken, getAllContacts);

router.get("/:contactId", authenticateToken, getContactById);

router.post("/", authenticateToken, addContact);

router.delete("/:contactId", authenticateToken, deleteContact);

router.put("/:contactId", authenticateToken, updateContact);

export { router };
