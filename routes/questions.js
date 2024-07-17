const { Router } = require("express");
const { getQuestions } = require("../controllers");

const router = Router();

router.get("/", getQuestions);

module.exports = router;
