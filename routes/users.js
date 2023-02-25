const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

// 사용자 정보 저장
router.post("/create", controller.postUserInfo);

module.exports = router;
