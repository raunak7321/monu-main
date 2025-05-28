import express from "express"
import { allReviewController, createReviewController } from "../controllers/reviewController.js"

const router = express.Router()

router.post("/create",createReviewController)
router.get("/all",allReviewController)

export default router;