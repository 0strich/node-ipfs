const express = require("express");
const router = express.Router();
const ipfs = require("../utils/ipfs");
const controller = require("../controllers/ipfs");

// 파일 생성
router.post("/create", controller.postFile);

// 파일 조회
router.get("/read", controller.getFile);

// 파일 수정
router.patch("/update", controller.patchFile);

// 파일 삭제
router.delete("/delete", controller.deleteFile);

module.exports = router;
