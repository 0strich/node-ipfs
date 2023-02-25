const express = require("express");
const router = express.Router();
const ipfs = require("../utils/ipfs");

// 파일 생성
router.post("/create", async (req, res, next) => {
  try {
    const body = req.body;
    console.log("body: ", body);
    const ipfsFile = await ipfs.createFile(body);
    res.send(ipfsFile);
  } catch (error) {
    res.send("respond with a resource");
  }
});

// 파일 조회
router.get("/read", async (req, res, next) => {
  try {
    const body = req.body;
    res.send("test");
  } catch (error) {
    res.send("respond with a resource");
  }
});

// 파일 수정
router.patch("/update", async (req, res, next) => {
  try {
    const body = req.body;
    res.send("test");
  } catch (error) {
    res.send("respond with a resource");
  }
});

// 파일 삭제
router.delete("/delete", async (req, res, next) => {
  try {
    const body = req.body;
    res.send("test");
  } catch (error) {
    res.send("respond with a resource");
  }
});

module.exports = router;
