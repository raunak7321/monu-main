import express from 'express';
const router = express.Router();
import { saveContact } from '../controllers/contactController.js';

// POST route to handle form submission
router.post('/send-mail', saveContact);

export default router
