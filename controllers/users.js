const cwr = require(`../utils/createWebResp`);
const ipfs = require("../utils/ipfs");
const service = require("../services/index");
const Infos = require("../models/infos");

// 정보 저장
const postUserInfo = async (req, res) => {
  try {
    const body = req.body;
    console.log("body: ", body);
    const ipfsData = {
      email: body?.email,
      smtiResult: body?.smtiResult,
    };
    const ipfsFile = await ipfs.createFile(ipfsData);

    const payload = {
      name: body?.name,
      email: body?.email,
      smtiResult: ipfsFile?.cid,
    };

    const docs = await service.create(payload);

    return cwr.createWebResp(res, 200, docs);
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

module.exports = {
  postUserInfo,
};