const express = require("express");
const router = express.Router();
const ipfsAPI = require("ipfs-api");
const ipfs = ipfsAPI("/ip4/127.0.0.1/tcp/5001");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    ipfs.files.add(Buffer.from("Hello, World!"), (err, result) => {
      if (err) throw err;
      console.log(result[0].hash);
    });
    res.send("respond with a resource");
  } catch (error) {
    res.send("respond with a resource");
  }
});

module.exports = router;
