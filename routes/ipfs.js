const express = require("express");
const router = express.Router();
const controller = require("../controllers/ipfs");

// 파일 생성
router.post("/create", controller.postFile);

// 파일 조회
router.get("/read/:cid", controller.getFile);

// 파일 수정
router.patch("/update/:cid", controller.patchFile);

// 파일 삭제
router.delete("/delete/:cid", controller.deleteFile);

module.exports = router;
