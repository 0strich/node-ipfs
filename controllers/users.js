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
      smti: body?.smti,
    };
    const ipfsFile = await ipfs.createFile(ipfsData);
    console.log("ipfsFile: ", ipfsFile);

    const payload = {
      name: body?.name,
      email: body?.email,
      smti: ipfsFile?.path,
    };

    const docs = await service.create(Infos, payload);

    return cwr.createWebResp(res, 200, docs);
  } catch (error) {
    return cwr.errorWebResp(res, 403, { error: "error" }, error.message);
  }
};

module.exports = {
  postUserInfo,
};
