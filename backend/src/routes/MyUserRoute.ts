import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// /api/my/user
// router.get("/", MyUserController.getCurrentUser);
router.post("/", MyUserController.createCurrentUser);
// router.put(
//   "/",
//   //   jwtCheck,
//   //   jwtParse,
//   //   validateMyUserRequest,
//   MyUserController.updateCurrentUser
// );

export default router;
