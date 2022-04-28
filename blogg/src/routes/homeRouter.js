const express = require("express");
const Post = require("../models/post");
const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const contactController = require("../controllers/contactController");
const composeController = require("../controllers/composeController");
const postController = require("../controllers/postController");
const outhController = require("../controllers/outhController");

const router = express.Router();

router
    .get("/register", outhController.getRegistrationPage)
    .post("/register", outhController.register);
router
    .get("/login", outhController.getLoginPage)
    .post("/login", outhController.login);

router.get("/", homeController);
router.get("/about", aboutController);
router.get("/contact", contactController);
router
    .get("/compose", composeController.showComposePage)
    .post("/compose", composeController.saveNewPost);
router.get("/posts/:postId", postController);

module.exports = router;