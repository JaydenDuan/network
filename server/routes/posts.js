import express from "express";

import {
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.js";

import { varifyToken } from "../middleware/auth.js";


const router = express.Router()

router.get("/", varifyToken, getFeedPosts)
router.get("/:userId/posts", varifyToken, getUserPosts)
router.patch("/:id/like", varifyToken, likePost)


export default router