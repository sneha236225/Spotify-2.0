import { Router } from "express";
import { getAllUsers, getMessages } from "../controller/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute); 

router.get("/", getAllUsers);
router.get("/:userId", getMessages);

export default router;