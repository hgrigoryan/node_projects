const express = require("express");
const Post = require("../models/post");
const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const contactController = require("../controllers/contactController");
const composeController = require("../controllers/composeController");
const postController = require("../controllers/postController");
const verifyJWT = require("../middlewares/verifyJWT");

const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);
router.get("/contact", contactController);
router
    .get("/compose", verifyJWT, composeController.showComposePage)
    .post("/compose", verifyJWT, composeController.saveNewPost);
router.get("/posts/:postId", postController);

module.exports = router;