const express = require("express");
const { registerNews, authNews, allNews } = require("../Controller/newsController");

const router = express.Router();

router.route('/').post(registerNews).get( allNews)

router.post("/auth", authNews);



module.exports = router;
